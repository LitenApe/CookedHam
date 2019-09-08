import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";

import { newId, } from "../../utils";

import "./styling.scss";

type Props = {
  label: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  reversed?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent, value: boolean) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Checkbox({
  label, checked, disabled, reversed, ...rest
}: Props): ReactElement {
  const formId = newId();

  const modifiers = [
    "checkbox",
    checked ? "checkbox-checked" : "",
    disabled ? "checkbox-disabled" : "",
    reversed ? "checkbox-reversed" : "",
  ].join(" ");

  function onChangeHandler(event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent): void {
    if (rest && rest.onChange) {
      rest.onChange(event, !checked);
    }
  }

  return (
    <label
      className={modifiers}
      tabIndex={disabled ? -1 : 0}
      htmlFor={formId}
      onKeyPress={(e): void => { onChangeHandler(e); }}
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
