import React, { useState, useEffect } from "react";

import { TextField, TextFieldProps } from "./index";

import { toNumber } from "../utils/toNumber";

export function NumberField({ value = "", onChange, ...rest }: TextFieldProps): React.ReactElement {
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
