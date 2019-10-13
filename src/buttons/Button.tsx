import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { ButtonProps } from "./index";

export function Button({
  children,
  rounded,
  className,
  ...rest
}: ButtonProps): ReactElement {
  const modifier = cookedNames(
    "ch-button",
    { rounded, },
    className
  );
  return (
    <button type="button" className={modifier} {...rest}>
      {children}
    </button>
  );
}
