import React, { DetailedHTMLProps, ReactElement, InputHTMLAttributes } from "react";
import cookedNames from "cookednames";

import { uniqueId } from "../utils/uniqueId";

interface Props {
  label: string;
  checked?: boolean;
  value: string;
  disabled?: boolean;
  reversed?: boolean;
  className?: string;
  onChange?: (
    event: React.ChangeEvent | React.KeyboardEvent,
    value: string,
    state: boolean
  ) => void;
}

type CheckboxProps = Props
& DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Checkbox({
  label, checked, disabled, reversed, className, ...rest
}: CheckboxProps): ReactElement {
  const formId = uniqueId("ch-checkbox-");

  const modifiers = cookedNames(
    "ch-checkbox",
    { checked, },
    { disabled, },
    { reversed, },
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
