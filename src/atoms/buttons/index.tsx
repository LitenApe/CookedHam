import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './styling.scss';

type props = {
  text: string,
  disabled?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({ text, ...rest }: props) {
  return <button type="button" {...rest}>{ text }</button>
}
