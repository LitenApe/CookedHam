import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

import "./styling.scss";

interface Props {
  value?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
}

export type TextFieldProps = Props
& DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export { TextField } from "./elements/TextField";

export { NumberField } from "./elements/NumberField";
