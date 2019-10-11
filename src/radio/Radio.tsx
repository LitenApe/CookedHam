import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";
import cookedNames from "cookednames";

import { newId, } from "../utils";

import "./styling.scss";

interface RadioButtonProps {
  label: string;
  value?: string;
  checked?: boolean;
  reversed?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined,
    value: string | undefined,
    state: boolean,
  ) => void;
}

type Props = RadioButtonProps
& DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Radio({
  label, checked, disabled, reversed, className, ...rest
}: Props): ReactElement {
  const formId = newId("radio-");

  const modifiers = cookedNames(
    "ch-radio",
    { checked, },
    { disabled, },
    { reversed, },
    className,
  );

  function onChange(
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
