import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";
import cookedNames from "cookednames";

import "./styling.scss";

interface ButtonProps {
  rounded?: boolean;
  disabled?: boolean;
  accent?: boolean;
  className?: string;
}

type props = ButtonProps & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({
  children,
  rounded,
  accent,
  className,
  ...rest
}: props): ReactElement {
  const modifier = cookedNames(
    "button",
    { rounded, },
    { accent, },
    className,
  );
  return (
    <button type="button" className={modifier} {...rest}>
      {children}
    </button>
  );
}
