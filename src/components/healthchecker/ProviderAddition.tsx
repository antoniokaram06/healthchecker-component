import { Input } from "./shad/input";
import { useState } from "react";
import { Button } from "./shad/button";

interface ProviderAdditionProps {
  onProviderSubmit: (provider: string) => void;
}

const ProviderAddition: React.FC<ProviderAdditionProps> = ({
  onProviderSubmit
}) => {

  const [providerValue, setProviderValue] = useState<string>("");


  return (
    <div className="flex flex-col justify left">
      <div className="font-semibold">Add Custom Node::</div>
      <div className="text-sm mb-2">Enter a custom Hive node URL.</div>
      <div className="flex w-ful">

        <Input
          value={providerValue}
          autoFocus={true}
          className="focus:bg-white dark:focus:bg-gray-700"
          type="text"
          data-testid="api-address-input"
          onChange={(e) => setProviderValue(e.target.value)}
        />
        <Button onClick={() => {onProviderSubmit(providerValue)}}>Add</Button>
      </div>
    </div>

  )
};

export default ProviderAddition;
