import { HealthChecker, TScoredEndpoint, WaxHealthCheckerValidatorFailedError } from "@hiveio/wax/vite";

export interface ApiChecker {
  title: string;
  method: any;
  params: any;
  validatorFunction: (data: any) => string | true;
}

export type ValidationErrorDetails = {
  checkName: string;
  providerName: string;
  message: string;
  paths: string[];
  params?: string | object;
}

export interface HealthCheckerFields {
  apiCheckers: ApiChecker[];
  scoredEndpoints: TScoredEndpoint[] | undefined;
  failedChecksByProvider: Map<string, ValidationErrorDetails[]>;
  nodeAddress: string | null;
  fallbacks?: string[];
  providers?: string[];
  isActive?: boolean;
  waitingForSwitch?: boolean;
}

const LOCAL_PROVIDERS = "localProviders";
const FALLBACKS = "fallbacks";

class HealthCheckerService extends EventTarget {

  private defaultProviders?: string[];
  private healthChecker?: HealthChecker;
  private endpointTitleById: Map<number, string> = new Map();
  private enableLogs?: boolean;
  
  
  public scoredEndpoints?: TScoredEndpoint[];
  public failedChecksByProvider: Map<string, ValidationErrorDetails[]> = new Map();
  public nodeAddress: string | null = null;
  public fallbacks?: string[];
  public providers?: string[];
  public apiCheckers?: ApiChecker[];
  public serviceKey?: string;
  public isActive?: boolean;
  public waitingForSwitch?: boolean = false;
  
  public changeNodeAddress: (node:string | null) => void = () => {}

  /**
   * 
   * @param serviceKey 
   * @param apiCheckers 
   * @param defaultProviders 
   * @param healthChecker 
   * @param nodeAddress 
   * @param changeNodeAddress 
   * @param enableLogs 
   * Initialize necessery part of HC process. Set providers, chekers and addresses. Don't start checks yet.
   */
  constructor(
    serviceKey: string,
    apiCheckers: ApiChecker[],
    defaultProviders: string[],
    healthChecker: HealthChecker,
    nodeAddress: string | null,
    changeNodeAddress: (node: string | null) => void,
    enableLogs?: boolean,
  ) {
    super();
    this.serviceKey = serviceKey;
    this.healthChecker = healthChecker;
    this.apiCheckers = apiCheckers;
    this.nodeAddress = nodeAddress;
    this.defaultProviders = defaultProviders;
    this.isActive = false;
    this.readFallbacksFromLocalStorage();
    this.readLocalProvidersFromLocalStorage();
    this.changeNodeAddress = changeNodeAddress;
    this.initializeHealthChecker();
    this.enableLogs = enableLogs;
  }

  emit(eventName: string, detail?: any) {
    this.dispatchEvent(new CustomEvent(eventName, { detail }));
  }


  // Local Storage

  readLocalProvidersFromLocalStorage = () => {
    try {
      const readValue = window.localStorage.getItem(`${LOCAL_PROVIDERS}-${this.serviceKey}`);
      if (readValue) { 
        this.providers = JSON.parse(readValue);
      } else {
        this.providers = this.defaultProviders;
      }
    } catch (error) {
      console.log(error);
    }
  }

  readFallbacksFromLocalStorage = () => {
    try {
      const readValue = window.localStorage.getItem(`${FALLBACKS}-${this.serviceKey}`);
      if (readValue) { 
        this.fallbacks = JSON.parse(readValue);
      } 
    } catch (error) {
      console.log(error);
    }
  }

  writeLocalProvidersToLocalStorage = async (localProviders: string[]) => {
    try {
      if (localProviders && localProviders.length > 0) {
        await window.localStorage.setItem(`${LOCAL_PROVIDERS}-${this.serviceKey}`, JSON.stringify(localProviders));
        this.providers = localProviders;
      } else {
        await window.localStorage.removeItem(`${LOCAL_PROVIDERS}-${this.serviceKey}`);
        this.providers = undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }

  writeFallbacksToLocalStorage = async (fallbacks: string[]) => {
    try {
      if (fallbacks && fallbacks.length > 0) {
        await window.localStorage.setItem(`${FALLBACKS}-${this.serviceKey}`, JSON.stringify(fallbacks));
        this.fallbacks = fallbacks;
      } else {
        await window.localStorage.removeItem(`${FALLBACKS}-${this.serviceKey}`);
        this.fallbacks = undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // HC Logic

  handleChangeOfNode = (nodeAddress: string | null) => {
    this.removeFallback(nodeAddress || "");
    this.changeNodeAddress(nodeAddress);
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  markValidationError = (endpointId: number, providerName: string, error: WaxHealthCheckerValidatorFailedError<string>) => {
    const checkTitle = this.endpointTitleById.get(endpointId);
    if (checkTitle) {
      const checkObject: ValidationErrorDetails = {
        checkName: checkTitle,
        providerName: providerName,
        message: error.message,
        paths: error.apiEndpoint.paths,
        params: error.request.data,
      }
      const prevoiusFailedChecks = [...this.failedChecksByProvider.get(providerName) || [], checkObject];
      const newFailedChecks = structuredClone(this.failedChecksByProvider).set(providerName, prevoiusFailedChecks);
      this.failedChecksByProvider = newFailedChecks;
      this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    }
  } 

  clearValidationError = (providerName: string, checkName: string) => {
    const failedChecks = [...this.failedChecksByProvider.get(providerName) || []].filter((failedCheck) => failedCheck.checkName !== checkName);
    const newFailedChecks = structuredClone(this.failedChecksByProvider).set(providerName, failedChecks);
    this.failedChecksByProvider = newFailedChecks;
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  updateAppAfterScoredEndpointsChange = (data: Array<TScoredEndpoint>) => {
    if (this.enableLogs) console.log(JSON.stringify(data)); 
    this.checkForFallbacks(data); 
    if (data.length)this.scoredEndpoints = data;
    if (this.waitingForSwitch) {
      this.switchToBestProvider();
    }
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  /**
   * Part of HC necessary initialization. Set event listeners and default endpoints.
   */
  initializeHealthChecker = async () => {
    this.healthChecker?.on('error', error => {if(this.enableLogs) console.error(error.message)});
    this.healthChecker?.on("data", this.updateAppAfterScoredEndpointsChange);
    this.healthChecker?.on("validationerror", error => this.markValidationError(error.apiEndpoint.id, error.request.endpoint, error));
    const initialEndpoints: TScoredEndpoint[] | undefined = this.providers?.map(
      (customProvider) => ({endpointUrl: customProvider, score: -1, up: true, latencies: []})
    )
    if (!!initialEndpoints && !this.scoredEndpoints) this.scoredEndpoints = initialEndpoints;
  }

  evaluateAndSwitch = () => {
    if (this.isActive && this.scoredEndpoints?.[0]?.up) {
      this.switchToBestProvider()
    } else {
      this.waitingForSwitch = true;
      this.registerCalls();
      this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    }
  }

  switchToBestProvider = () => {
    const bestProvider = this.scoredEndpoints?.[0]
    if (bestProvider?.up && bestProvider?.endpointUrl) {
      if (this.nodeAddress !== bestProvider.endpointUrl) this.handleChangeOfNode(bestProvider.endpointUrl);
      this.waitingForSwitch = false;
      this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    } 
  }

  checkForFallbacks = (scoredEndpoints: TScoredEndpoint[]) => {
    const currentScoredEndpoint = scoredEndpoints.find((scoredEdnpoint) => scoredEdnpoint.endpointUrl === this.nodeAddress);
    if (currentScoredEndpoint && !currentScoredEndpoint.up) {
      this.fallbacks?.forEach((fallback) => {
        const fallbackScoredEndpoint = scoredEndpoints.find((scoredEdnpoint) => scoredEdnpoint.endpointUrl === fallback);
        if (fallbackScoredEndpoint && fallbackScoredEndpoint.up) this.changeNodeAddress(fallback) ;
      })
    }
  }

  registerCalls = async () => {
    const registeredEndpoints = new Map<number, string>();
    if (this.apiCheckers)
    for (const checker of this.apiCheckers) {
      const healthCheckerEndpoint = await this.healthChecker?.register(checker!.method, checker!.params, checker!.validatorFunction, this.providers);
      if (healthCheckerEndpoint)
      registeredEndpoints.set(healthCheckerEndpoint.id, checker.title);
    }
    this.endpointTitleById = registeredEndpoints;
  }

  /**
   * Trigger automatic checks.
   */
  startCheckingProcess = async () => {
    this.registerCalls();
    this.isActive = true;
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  /**
   * Stop automatic checks.
   */
  stopCheckingProcess = async () => {
    this.healthChecker?.unregisterAll();
    this.isActive = false;
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  addProvider = (provider: string) => {
    if (this.healthChecker) {
      for (const endpoint of this.healthChecker) {
        endpoint.addEndpointUrl(provider);
      }
      if (this.providers && !this.providers.some((localProvider) => provider === localProvider)) {
        this.writeLocalProvidersToLocalStorage([...(this.providers || []), provider]);
        this.providers = [...(this.providers || []), provider];
        this.scoredEndpoints = [...this.scoredEndpoints || [], {endpointUrl: provider, score: -1, up: true, latencies: []}]
        this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
      }
    }
  }

  removeProvider = (provider: string) => {
    if (this.healthChecker && this.providers)
    for (const endpoint of this.healthChecker) {
      endpoint.removeEndpointUrl(provider);
    }
    const newLocalProviders = this.providers?.filter((localProvider) => localProvider !== provider) || [];
    this.scoredEndpoints = this.scoredEndpoints?.filter((endpoint) => endpoint.endpointUrl !== provider);
    this.writeLocalProvidersToLocalStorage(newLocalProviders);
    this.providers = newLocalProviders;
    this.removeFallback(provider);
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  resetProviders = () => {
    this.writeLocalProvidersToLocalStorage(this?.defaultProviders || []);
    this.scoredEndpoints = [];
    this.healthChecker?.unregisterAll();
    this.registerCalls();
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  registerFallback = (provider: string) => {
    if (!this.fallbacks?.includes(provider)) {
      this.fallbacks = [...this.fallbacks || [], provider];
      this.writeFallbacksToLocalStorage(this.fallbacks);
      this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    }
  }

  removeFallback = (provider: string) => {
    this.fallbacks = this.fallbacks?.filter((fallback) => fallback !== provider) || [];
    this.writeFallbacksToLocalStorage(this.fallbacks);
    this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
  }

  getComponentData = (): HealthCheckerFields | undefined => {
    if (this.apiCheckers && this.scoredEndpoints)
    return {
      apiCheckers: this.apiCheckers,
      scoredEndpoints: this.scoredEndpoints,
      failedChecksByProvider: this.failedChecksByProvider,
      fallbacks: this.fallbacks,
      nodeAddress: this.nodeAddress,
      providers: this.providers,
      isActive: this.isActive,
      waitingForSwitch: this.waitingForSwitch,
    }
  }

}

export {HealthCheckerService};