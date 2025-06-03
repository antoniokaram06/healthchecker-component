import { cn } from "./utils.ts";
import { TScoredEndpoint } from "@hiveio/wax/vite";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./shad/button";
import ProviderCard from "./ProviderCard";
import ProviderAdditionDialog from "./ProviderAddition.tsx";
import ValidationErrorDialog from "./ValidationErrorDialog";
import { ValidationErrorDetails, ApiChecker } from "./index.ts"; 
import { HealthCheckerService } from "./index.ts";
import { Toggle } from "./shad/toggle.tsx";


interface HealthCheckerComponentProps {
  className?: string;
  healthCheckerService: HealthCheckerService
}

const HealthCheckerComponent: React.FC<HealthCheckerComponentProps> = ({
  className,
  healthCheckerService
}) => {

  const {
    addProvider,
    removeProvider,
    resetProviders,
    clearValidationError,
    handleChangeOfNode,
    registerFallback,
    removeFallback,
    startCheckingProcess,
    stopCheckingProcess,
    evaluateAndSwitch,
    serviceKey,
  } = healthCheckerService

  const [apiCheckers, setApiCheckers] = useState<ApiChecker[] | undefined>(undefined);
  const [scoredEndpoints, setScoredEndpoints] = useState<TScoredEndpoint[] | undefined>(undefined);
  const [fallbacks, setFallbacks] = useState<string[] | undefined>(undefined);
  const [nodeAddress, setNodeAddress] = useState<string | null>(null);
  const [providers, setProviders] = useState<string[] | undefined>(undefined);
  const [failedChecksByProvider, setFailedChecksByProvider] = useState<Map<string, ValidationErrorDetails[]>>(new Map());
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
  const [switchStatus, setSwitchStatus] = useState<"waiting" | "done" | "no_change" | undefined>(undefined);

  const [isValidationErrorDialogOpened, setIsValidationErrorDialogOpened] = useState<boolean>(false);
  const [selectedValidator, setSelectedValidator] = useState<ValidationErrorDetails | undefined>(undefined);
  
  const handleAdditionOfProvider = (provider: string) => {
    addProvider(provider);
  }

  const selectValidator = (providerName: string, checkTitle: string) => {
    const foundValidator = failedChecksByProvider?.get(providerName)?.find((failedCheck) => failedCheck.checkName === checkTitle);
    if (foundValidator) {
      setSelectedValidator(foundValidator);
      setIsValidationErrorDialogOpened(true);
    }
  }

  const actualizeData = () => {
    const hcData = healthCheckerService.getComponentData();
    if (hcData) {
      setFallbacks(hcData?.fallbacks);
      setScoredEndpoints(hcData?.scoredEndpoints);
      setApiCheckers(hcData?.apiCheckers)
      setProviders(hcData?.providers)
      setFailedChecksByProvider(hcData.failedChecksByProvider)
      setNodeAddress(hcData?.nodeAddress);
      setIsActive(hcData?.isActive)
      setSwitchStatus(hcData?.switchStatus)
    }
  }

  const changeActivity = () => {
    if (isActive) {
      stopCheckingProcess()
    } else {
      startCheckingProcess()
    }
  }

  useEffect(() => {
    healthCheckerService.addEventListener(`stateChange-${serviceKey}`, () => {actualizeData()});
    actualizeData();
    return () => {
      healthCheckerService.removeEventListener(`stateChange-${serviceKey}`, () => {actualizeData()});
    };
  }, [])

  
  const renderProvider = (scoredEndpoint: TScoredEndpoint, index: number, isTop?: boolean) => {
    const {endpointUrl, score, up,} = scoredEndpoint;
    let lastLatency: number | null = null;
    if (up && scoredEndpoint.latencies.length) {
      lastLatency = scoredEndpoint.latencies[scoredEndpoint.latencies.length - 1];
    }
    if (!providers?.find((customProvider) => customProvider === endpointUrl)) {
      return null;
    }
    return (
      <ProviderCard 
        isTop={!!isTop}
        key={endpointUrl}
        providerLink={endpointUrl}
        switchToProvider={handleChangeOfNode}
        disabled={score === 0}
        latency={lastLatency}
        isSelected={scoredEndpoint.endpointUrl === nodeAddress}
        checkerNamesList={apiCheckers?.map((apicChecker) => apicChecker.title) || []}
        isFallback={!!fallbacks?.includes(endpointUrl)}
        index={index + 1}
        score={scoredEndpoint.score}
        deleteProvider={removeProvider}
        registerFallback={registerFallback}
        removeFallback={removeFallback}    
        failedChecks={failedChecksByProvider.get(endpointUrl)?.map((failedCheck) => failedCheck.checkName) || []}
        selectValidator={selectValidator}   
        isHealthCheckerActive={!!isActive}                                                                            
      />
    )       
  }

  const renderProviders = () => {
    if (!scoredEndpoints || !scoredEndpoints.length) return <Loader2 className="ml-2 animate-spin h-8 w-8 justify-self-center mb-4  ..." />  
    const selectedProviderIndex = scoredEndpoints.findIndex((scoredEndpoint) => scoredEndpoint.endpointUrl === nodeAddress);
    const selectedProvider = scoredEndpoints[selectedProviderIndex]
    return (
      <>
        {!!selectedProvider && renderProvider(selectedProvider, selectedProviderIndex, true)}
        {scoredEndpoints?.map(
          (scoredEndpoint, index) => renderProvider(scoredEndpoint, index)
        )}
      </>
    )
  }

  const renderSwitchStatus = () => {
    if (!switchStatus) 
      return (
        <>Switch to the best</>
      );
    if (switchStatus === "waiting")
      return (
        <>Evaluating {switchStatus === "waiting" && <Loader2 className="animate-spin h-6 w-6 ..." /> }</>
      );
    if (switchStatus === "done")
      return (
        <>Endpoint found, switching</>
      );
    if (switchStatus === "no_change")
      return (
        <>Already on the best provider</>
      );
  }

  return (
    <div className={cn(className)}>
      <h2 className="text-xl text-center">Healthchecker for API servers</h2>
      <div className="flex items-center space-x-2 justify-self-center my-2" >
        <Toggle
          checked={!!isActive}
          onClick={changeActivity}
          className="text-base"
          leftLabel="Continuous health checking of APIs"
        />
      </div>
      <div className="flex items-center space-x-2 justify-self-center my-2" >
        <Button variant="outline" className="mt-2" onClick={() => {evaluateAndSwitch()}}>
          {renderSwitchStatus()}
        </Button>
      </div>
      {renderProviders()}
      <ProviderAdditionDialog 
        onProviderSubmit={handleAdditionOfProvider}
      />
      <Button variant="outline" className="mt-2" onClick={() => {resetProviders()}}>
        Restore default API server set
      </Button>
      <ValidationErrorDialog 
        isOpened={isValidationErrorDialogOpened}
        onDialogOpenChange={setIsValidationErrorDialogOpened}
        validatorDetails={selectedValidator}
        clearValidationError={clearValidationError}
      />
    </div>
  );
};

export {HealthCheckerComponent};
