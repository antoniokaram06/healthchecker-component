interface ProviderCardProps {
    providerLink: string;
    disabled: boolean;
    isSelected: boolean;
    isTop: boolean;
    checkerNamesList: string[];
    latency: number | null;
    score: number;
    index: number;
    failedChecks: string[];
    isHealthCheckerActive: boolean;
    switchToProvider: (providerLink: string | null) => void;
    deleteProvider: (provider: string) => void;
    selectValidator: (providerName: string, checkTitle: string) => void;
}
declare const ProviderCard: React.FC<ProviderCardProps>;
export default ProviderCard;
