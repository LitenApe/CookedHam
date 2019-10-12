import React, { DetailedHTMLProps, ReactElement, ButtonHTMLAttributes } from "react";
import cookedNames from "cookednames";

interface Props {
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
}

type ButtonProps = Props
& DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

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

export function PrimaryButton({ children, className, ...rest }: ButtonProps): ReactElement {
  const modifier = cookedNames("ch-primary-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, className, ...rest }: ButtonProps): ReactElement {
  const modifier = cookedNames("ch-secondary-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}

export function TertiaryButton({ children, className, ...rest }: ButtonProps): ReactElement {
  const modifier = cookedNames("ch-tertiery-button", className);
  return (
    <Button className={modifier} {...rest}>
      {children}
    </Button>
  );
}
