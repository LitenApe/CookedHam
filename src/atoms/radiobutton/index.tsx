import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";
import cookedNames from "cookednames";

import { newId, } from "../../utils";

import "./styling.scss";

type Props = {
  label: string;
  value?: string;
  checked?: boolean;
  reversed?: boolean;
  disabled?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined,
    value: string | undefined,
    state: boolean,
  ) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function RadioButton({
  label, checked, disabled, reversed, ...rest
}: Props): ReactElement {
  const formId = newId();

  const modifiers = cookedNames(
    "ch-radio-button",
    { checked, },
    { disabled, },
    { reversed, },
  );

  function onChangeHandler(
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined
  ): void {
    if (rest && rest.onChange) {
      rest.onChange(event, rest.value, !checked);
    }
  }

  return (
    <label
      htmlFor={formId}
      className={modifiers}
      tabIndex={disabled ? -1 : 0}
      onKeyPress={(e): void => { if (e.key === "Enter") { onChangeHandler(e); } }}
    >
      <input
        type="radio"
        id={formId}
        checked={checked}
        disabled={disabled}
        {...rest}
        onChange={(e): void => onChangeHandler(e)}
      />
      {label}
    </label>
  );
}
