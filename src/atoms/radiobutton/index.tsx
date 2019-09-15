import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";

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
    state: boolean,
    value: string | undefined
  ) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function RadioButton({
  label, checked, disabled, reversed, ...rest
}: Props): ReactElement {
  const formId = newId();

  const modifiers = [
    "radio-button",
    checked ? "radio-button-checked" : "",
    disabled ? "radio-button-disabled" : "",
    reversed ? "radio-button-reversed" : "",
  ].join(" ");

  function onChangeHandler(
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined
  ): void {
    if (rest && rest.onChange) {
      rest.onChange(event, !checked, rest.value);
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
        {...rest}
        onChange={(e): void => onChangeHandler(e)}
      />
      {label}
    </label>
  );
}
