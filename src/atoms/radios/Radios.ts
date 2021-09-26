import { ComponentProps, createElement } from 'react';
import Field from '../field/Field';

function Radios(props: ComponentProps<'fieldset'> & ComponentProps<'input'>) {
  const { children, ...rest } = props;
  return createElement(Field, rest, createElement('fieldset', null, children));
}

export default Radios;
