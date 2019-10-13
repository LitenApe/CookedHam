import {
  ChangeEvent, DetailedHTMLProps, KeyboardEvent, InputHTMLAttributes
} from "react";

import "./styling.scss";

interface Props {
  label: string;
  checked?: boolean;
  value: string;
  disabled?: boolean;
  reversed?: boolean;
  className?: string;
  onChange?: (
    event: ChangeEvent | KeyboardEvent,
    value: string,
    state: boolean
  ) => void;
}

export type CheckboxProps = Props
& DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export { Checkbox } from "./Checkbox";
