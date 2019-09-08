import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";

import { newId, } from "../../utils";

import "./styling.scss";

type Props = {
  label: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  reversed?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Checkbox({
  label, checked, disabled, reversed, ...rest
}: Props): ReactElement {
  const formId = newId();

  return (
    <label
      className={[
        "checkbox",
        disabled ? "checkbox-disabled" : "",
        reversed ? "checkbox-reversed" : "",
      ].join(" ")}
      htmlFor={formId}
    >
      <input
        id={formId}
        type="checkbox"
        aria-checked={checked}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <span className="checkbox-custom" />
      <span>{label}</span>
    </label>
  );
}
