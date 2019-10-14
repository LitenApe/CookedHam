import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { ButtonProps } from "./index";

export function Button({
  fat,
  wide,
  rounded,
  children,
  className,
  ...rest
}: ButtonProps): ReactElement {
  const modifier = cookedNames(
    "ch-button",
    { fat, },
    { wide, },
    { rounded, },
    className
  );
  return (
    <button type="button" className={modifier} {...rest}>
      {children}
    </button>
  );
}
