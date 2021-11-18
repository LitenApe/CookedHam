import { createElement, ForwardedRef, forwardRef } from 'react';
import { Field } from '../../atoms/field';
import { Label } from '../../atoms/label';
import { Legend } from '../../atoms/legend';
import { Radio, RadioProps } from '../../atoms/radio';
import { RadioGroup, RadioGroupProps } from '../../atoms/radio_group';
import { useId } from '../../utils/hooks/useId';
import { BaseField } from '../base_field';

interface Option extends Omit<RadioProps, 'children' | 'value' | 'name'> {
  label: string;
  value: string;
}

type RadioFieldProps = {
  name: string;
  label: string;
  options: Array<Option>;
} & Omit<RadioGroupProps, 'children' | 'ref'>;

function RadioField(
  props: RadioFieldProps,
  ref: ForwardedRef<HTMLFieldSetElement>
) {
  const { label, options, name, ...rest } = props;
  const id = useId('radio-field');

  return createElement(
    BaseField,
    rest,
    createElement(RadioGroup, { ref }, [
      createElement(Legend, { key: `${id}_group_legend_${label}` }, label),
      options.map(({ label, ...radioProps }) =>
        createElement(
          Field,
          { key: `${id}_group_option_${label}` },
          createElement('div', null, [
            createElement(Radio, {
              ...radioProps,
              name: name,
              key: `${id}_radio_${label}`,
            }),
            createElement(Label, { key: `${id}_label_${label}` }, label),
          ])
        )
      ),
    ])
  );
}

export default forwardRef(RadioField);
