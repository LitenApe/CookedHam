import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './styling.scss';

type props = {
  text: string,
  rounded?: boolean,
  disabled?: boolean,
  accent?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({ text, rounded, accent, ...rest }: props) {
  const modifier = [
    rounded ? 'button-round':'',
    accent ? 'button-accent':'',
  ].join(' ');
  return <button type="button" className={modifier} {...rest}>{ text }</button>
}
