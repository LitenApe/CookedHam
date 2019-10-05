import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";
import cookedNames from "cookednames";

import { newId, } from "../../utils";

import "./styling.scss";

type Props = {
  label: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  reversed?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent,
    value: string | undefined,
    state: boolean
  ) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Checkbox({
  label, checked, disabled, reversed, ...rest
}: Props): ReactElement {
  const formId = newId();

  const modifiers = cookedNames(
    "ch-checkbox",
    { checked, },
    { disabled, },
    { reversed, },
  );

  function onChangeHandler(event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent): void {
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
