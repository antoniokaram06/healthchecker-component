import { HealthCheckerService } from './index.ts';

interface HealthCheckerComponentProps {
    className?: string;
    healthCheckerService: HealthCheckerService;
}
declare const HealthCheckerComponent: React.FC<HealthCheckerComponentProps>;
export { HealthCheckerComponent };
