import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import "./styling.scss";

interface Props {
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
}

export type ButtonProps = Props
& DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export { Button } from "./Button";

export { PrimaryButton } from "./PrimaryButton";

export { SecondaryButton } from "./SecondaryButton";

export { TertiaryButton } from "./TertiaryButton";
