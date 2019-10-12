import React, {
  DetailedHTMLProps, InputHTMLAttributes, useState, useEffect
} from "react";
import cookedNames from "cookednames";

import { toNumber } from "../utils/toNumber";

type TextFieldProps = {
  className?: string;
  disabled?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function TextField({ className, disabled, ...rest }: TextFieldProps): React.ReactElement {
  const modifiers = cookedNames("ch-text-field", { disabled, }, className);
  return <input className={modifiers} {...rest} disabled={disabled} />;
}

type NumberFieldProps = {
  onChange?: (event: React.ChangeEvent, value: string) => void;
} & TextFieldProps;

export function NumberField({ value = "", onChange, ...rest }: NumberFieldProps): React.ReactElement {
  const [fieldValue, setFieldValue] = useState(toNumber(value as string));

  useEffect(() => {
    setFieldValue(toNumber(value as string));
  }, [value]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const converted = toNumber(event.target.value);
    setFieldValue(converted);
    if (onChange) { onChange(event, converted); }
  };

  return <TextField {...rest} value={fieldValue} onChange={changeHandler} />;
}
