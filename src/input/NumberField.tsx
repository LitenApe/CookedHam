import React, { useState, useEffect } from "react";

import { TextField, TextFieldProps } from "./index";

import { toNumber } from "../utils/toNumber";

interface Props {
  format?: (value: string) => string;
}

type NumberFieldProps = Props & TextFieldProps;

export function NumberField({
  value = "",
  format = toNumber,
  onChange,
  ...rest
}: NumberFieldProps): React.ReactElement {
  const [fieldValue, setFieldValue] = useState(format(value));

  useEffect(() => {
    setFieldValue(format(value));
  }, [value]);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const converted = format(event.target.value);
    setFieldValue(converted);
    if (onChange) { onChange(event, converted as string); }
  }


  return <TextField {...rest} value={fieldValue} onChange={changeHandler} />;
}
