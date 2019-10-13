import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { CheckboxProps } from "./index";

import { uniqueId } from "../utils/uniqueId";

export function Checkbox({
  label, checked, disabled, className, ...rest
}: CheckboxProps): ReactElement {
  const formId = uniqueId("ch-checkbox-");

  const modifiers = cookedNames(
    "ch-checkbox",
    { checked, },
    { disabled, },
    className
  );

  function onChangeHandler(event: React.ChangeEvent | React.KeyboardEvent): void {
    if (rest && rest.onChange) {
      rest.onChange(event, rest.value, !checked);
    }
  }

  return (
    <label
      className={modifiers}
      tabIndex={disabled ? -1 : 0}
      htmlFor={formId}
      onKeyPress={(e): void => { if (e.key === "Enter") { onChangeHandler(e); } }}
    >
      <input
        id={formId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...rest}
        onChange={(e): void => { onChangeHandler(e); }}
      />
      {label}
    </label>
  );
}
