import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { Button, ButtonProps } from "../index";

export function SecondaryButton({ children, className, ...rest }: ButtonProps): ReactElement {
  const modifier = cookedNames("ch-secondary-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}
