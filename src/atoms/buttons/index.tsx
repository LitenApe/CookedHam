import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";
import cookedNames from "cookednames";

import "./styling.scss";

type props = {
  text: string;
  rounded?: boolean;
  disabled?: boolean;
  accent?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({
  text,
  rounded,
  accent,
  ...rest
}: props): ReactElement {
  const modifier = cookedNames(
    "button",
    { rounded, },
    { accent, },
  );
  return (
    <button type="button" className={modifier} {...rest}>
      {text}
    </button>
  );
}
