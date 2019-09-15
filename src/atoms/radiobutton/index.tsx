import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";

import { newId, } from "../../utils";

import "./styling.scss";

type Props = {
  label: string;
  checked?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function RadioButton({ label, checked, ...rest }: Props): ReactElement {
  const formId = newId();

  const modifiers = [
    "radio-button",
  ].join(" ");

  return (
    <label htmlFor={formId} className={modifiers}>
      <input
        type="radio"
        id={formId}
        checked={checked}
        {...rest}
      />
      <span className="radio-button-custom" />
      <span>{label}</span>
    </label>
  );
}
