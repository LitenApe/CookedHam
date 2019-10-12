import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, } from "react";
import cookedNames from "cookednames";

import "./styling.scss";

interface ButtonProps {
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
}

type Props = ButtonProps & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({
  children,
  rounded,
  className,
  ...rest
}: Props): ReactElement {
  const modifier = cookedNames(
    "ch-button",
    { rounded, },
    className,
  );
  return (
    <button type="button" className={modifier} {...rest}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, className, ...rest }: Props): ReactElement {
  const modifier = cookedNames("ch-primary-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, className, ...rest }: Props): ReactElement {
  const modifier = cookedNames("ch-secondary-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}

export function TertiaryButton({ children, className, ...rest }: Props): ReactElement {
  const modifier = cookedNames("ch-tertiery-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}
