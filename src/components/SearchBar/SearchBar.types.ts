//import {  ChangeEventHandler, MouseEventHandler } from "react";
export interface SearchBarProps {
    id?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    //onChange?: ChangeEventHandler<HTMLInputElement>;
    onChange?: (input: string) => void;
    //onCancelSearch?: MouseEventHandler<HTMLButtonElement>;
    onCancelSearch?: () => void;
    autoComplete?: string;
    disabled?: boolean;
    debounceTime?: number;
}