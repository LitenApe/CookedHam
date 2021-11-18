import { createElement, ForwardedRef, forwardRef } from 'react';
import {
  Option as SelectOption,
  OptionProps,
  Select,
  SelectProps,
} from '../../atoms/select';
import { useId } from '../../utils/hooks/useId';

interface Option extends Omit<OptionProps, 'children' | 'value' | 'ref'> {
  label: string;
  value: string;
}

type SelectFieldProps = {
  label: string;
  options: Array<Option>;
} & Omit<SelectProps, 'children'>;

function SelectField(
  props: SelectFieldProps,
  ref: ForwardedRef<HTMLSelectElement>
): JSX.Element {
  const { label, options, ...rest } = props;
  const id = useId('select-field');

  return createElement(
    Select,
    { ...rest, ref },
    options.map(({ label, ...optionProps }) =>
      createElement(
        SelectOption,
        { ...optionProps, key: `${id}_option_${label}` },
        label
      )
    )
  );
}

export default forwardRef(SelectField);
