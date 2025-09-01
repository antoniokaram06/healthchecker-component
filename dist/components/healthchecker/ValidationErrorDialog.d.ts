interface ValidationErrorDialogProps {
    isOpened: boolean;
    onDialogOpenChange: (isOpened: boolean) => void;
    validatorDetails?: any;
    clearValidationError: (providerName: string, checkerName: string) => void;
}
declare const ValidationErrorDialog: React.FC<ValidationErrorDialogProps>;
export default ValidationErrorDialog;
