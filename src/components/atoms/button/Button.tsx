import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({ text, ...rest }: ButtonProps) {
  const className = "button";

  return (
    <button className={className} {...rest}>
      {text}
    </button>
  );
}
