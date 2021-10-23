import { ComponentProps, createElement } from 'react';
import Field from '../field/Field';

function RadioGroup(
  props: ComponentProps<'fieldset'> & ComponentProps<'input'>
) {
  const { children, ...rest } = props;
  return createElement(
    Field,
    rest,
    createElement('fieldset', { role: 'radiogroup' }, children)
  );
}

export default RadioGroup;
