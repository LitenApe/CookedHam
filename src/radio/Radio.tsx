import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { RadioProps } from "./index";

import { uniqueId } from "../utils/uniqueId";

export function Radio({
  label, checked, disabled, reversed, className, ...rest
}: RadioProps): ReactElement {
  const formId = uniqueId("ch-radio-");

  const modifiers = cookedNames(
    "ch-radio",
    { checked, },
    { disabled, },
    { reversed, },
    className
  );

  function onChange(
    event: React.ChangeEvent | React.KeyboardEvent
  ): void {
    if (rest && rest.onChange) {
      rest.onChange(event, rest.value, !checked);
    }
  }

  return (
    <label
      htmlFor={formId}
      className={modifiers}
      onKeyPress={e => { if (e.key === "Enter") { onChange(e); } }}
    >
      <input
        type="radio"
        id={formId}
        checked={checked}
        disabled={disabled}
        {...rest}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
