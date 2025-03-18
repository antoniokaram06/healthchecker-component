type HealthcheckerProps = {
    testString: string;
  };
  
  export const HealthChecker = ({ testString }: HealthcheckerProps) => {
    return (
      <div className="ui">
        <div className="ui-text-4xl">{testString}</div>
      </div>
    );
  };
  