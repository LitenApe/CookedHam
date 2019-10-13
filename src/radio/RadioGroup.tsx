import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { Radio, RadioProps } from "./index";

import { uniqueId } from "../utils/uniqueId";

interface RadioOptions {
  defaultChecked?: boolean;
}

type Options = RadioProps & RadioOptions;

interface RadioGroupProps {
  name: string;
  label: string;
  options: Options[];
  className?: string;
  onChange?: (
    event: React.ChangeEvent | React.KeyboardEvent,
    value: string
  ) => void;
}

export function RadioGroup(props: RadioGroupProps): ReactElement {
  const { className, options, label, } = props;
  const componentId = uniqueId("ch-radio-group-");
  const labelId = uniqueId("ch-radio-label-");
  const modifiers = cookedNames(
    "ch-radio-group",
    className
  );

  const onChange = (
    event: React.ChangeEvent | React.KeyboardEvent,
    value?: string,
    state?: boolean
  ): void => {
    if (props.onChange && state && value) {
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
