import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import "./styling.scss";

interface Props {
  fat?: boolean;
  wide?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
}

export type ButtonProps = Props
& DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export { Button } from "./elements/Button";

export { PrimaryButton } from "./elements/PrimaryButton";

export { SecondaryButton } from "./elements/SecondaryButton";

export { TertiaryButton } from "./elements/TertiaryButton";
