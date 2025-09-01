import { TScoredEndpoint, WaxHealthCheckerValidatorFailedError } from '@hiveio/wax/vite';

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
};
export interface HealthCheckerFields {
    apiCheckers: ApiChecker[];
    scoredEndpoints: TScoredEndpoint[] | undefined;
    failedChecksByProvider: Map<string, ValidationErrorDetails[]>;
    nodeAddress: string | null;
    providers?: string[];
    isActive?: boolean;
    switchStatus?: "waiting" | "done" | "no_change";
}
declare class HealthCheckerService extends EventTarget {
    private defaultProviders?;
    private healthChecker?;
    private endpointTitleById;
    private enableLogs?;
    scoredEndpoints?: TScoredEndpoint[];
    failedChecksByProvider: Map<string, ValidationErrorDetails[]>;
    nodeAddress: string | null;
    providers?: string[];
    apiCheckers?: ApiChecker[];
    serviceKey?: string;
    isActive?: boolean;
    switchStatus?: "waiting" | "done" | "no_change";
    changeNodeAddress: (node: string | null) => void;
    /**
     *
     * @param serviceKey
     * @param apiCheckers
     * @param defaultProviders
     * @param nodeAddress
     * @param changeNodeAddress
     * @param enableLogs
     * Initialize necessery part of HC process. Set providers, chekers and addresses. Don't start checks yet.
     */
    constructor(serviceKey: string, apiCheckers: ApiChecker[], defaultProviders: string[], nodeAddress: string | null, changeNodeAddress: (node: string | null) => void, enableLogs?: boolean);
    emit(eventName: string, detail?: any): void;
    readLocalProvidersFromLocalStorage: () => void;
    writeLocalProvidersToLocalStorage: (localProviders: string[]) => Promise<void>;
    handleChangeOfNode: (nodeAddress: string | null) => void;
    markValidationError: (endpointId: number, providerName: string, error: WaxHealthCheckerValidatorFailedError<string>) => void;
    clearValidationError: (providerName: string, checkName: string) => void;
    updateAppAfterScoredEndpointsChange: (data: Array<TScoredEndpoint>) => void;
    /**
     * Part of HC necessary initialization. Set event listeners and default endpoints.
     */
    initializeHealthChecker: () => Promise<void>;
    evaluateAndSwitch: () => void;
    switchToBestProvider: () => void;
    registerCalls: () => Promise<void>;
    /**
     * Trigger automatic checks.
     */
    startCheckingProcess: () => Promise<void>;
    /**
     * Stop automatic checks.
     */
    stopCheckingProcess: () => Promise<void>;
    addProvider: (provider: string) => void;
    removeProvider: (provider: string) => void;
    resetProviders: () => void;
    getComponentData: () => HealthCheckerFields | undefined;
}
export { HealthCheckerService };
