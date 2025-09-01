import { default as React } from 'react';

interface ToggleProps {
    leftLabel?: string;
    rightLabel?: string;
    checked: boolean;
    className?: string;
    disabled?: boolean;
    onClick: () => void | undefined;
}
declare const Toggle: React.FC<ToggleProps>;
export { Toggle };
