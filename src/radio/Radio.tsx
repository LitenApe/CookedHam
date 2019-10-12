import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import cookedNames from "cookednames";

import { newId } from "../utils";

import "./styling.scss";

interface Props {
  label: string;
  name?: string;
  value: string;
  checked?: boolean;
  reversed?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined,
    value: string,
    state: boolean,
  ) => void;
}

export type RadioProps = Props
& DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Radio({
  label, checked, disabled, reversed, className, ...rest
}: Props): ReactElement {
  const formId = newId("ch-radio-");

  const modifiers = cookedNames(
    "ch-radio",
    { checked, },
    { disabled, },
    { reversed, },
    className
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

interface RadioOptions {
  defaultChecked?: boolean;
}

type Options = RadioProps & RadioOptions;

interface RadioGroupProps {
  name: string;
  label: string;
  options: Options[];
  className?: string;
  horizontal?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined,
    value: string
  ) => void;
}

export function RadioGroup(props: RadioGroupProps): ReactElement {
  const {
    className, options, horizontal, label,
  } = props;
  const componentId = newId("ch-radio-group-");
  const labelId = newId("ch-radio-label-");
  const modifiers = cookedNames(
    "ch-radio-group",
    { horizontal, },
    className
  );

  const onChange = (
    event: React.ChangeEvent<HTMLElement> | React.KeyboardEvent | undefined,
    value: string,
    state: boolean
  ): void => {
    if (props.onChange && state) {
      props.onChange(event, value);
    }
  };

  return (
    <div
      id={componentId}
      role="radiogroup"
      className={modifiers}
      aria-labelledby={labelId}
    >
      <label id={labelId} htmlFor={componentId}>{label}</label>
      {options.map(option => (
        <Radio
          key={`ch-radio-group-${option.label}`}
          {...option}
          name={props.name}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
