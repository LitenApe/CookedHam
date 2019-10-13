import {
  ChangeEvent, DetailedHTMLProps, KeyboardEvent, InputHTMLAttributes
} from "react";

import "./styling.scss";

interface Props {
  label: string;
  name?: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (
    event: ChangeEvent | KeyboardEvent,
    value: string,
    state: boolean,
  ) => void;
}

export type RadioProps = Props
& DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export { Radio } from "./Radio";

export { RadioGroup } from "./RadioGroup";
