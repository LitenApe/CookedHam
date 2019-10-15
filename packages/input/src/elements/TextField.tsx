import React from "react";
import cookedNames from "cookednames";

import { TextFieldProps } from "../index";

export function TextField({
  className, disabled, ...rest
}: TextFieldProps): React.ReactElement {
  const modifiers = cookedNames("ch-text-field", { disabled, }, className);
  return <input className={modifiers} {...rest} disabled={disabled} />;
}
