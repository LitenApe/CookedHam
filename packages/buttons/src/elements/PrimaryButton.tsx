import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { Button, ButtonProps } from "../index";

export function PrimaryButton({ children, className, ...rest }: ButtonProps): ReactElement {
  const modifier = cookedNames("ch-primary-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}
