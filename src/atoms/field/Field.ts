import { Dispatch, SetStateAction, useState } from 'react';
import useId from '../../utils/hooks/useId';

type FieldProps = {
  id: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export type Props = {
  defaultValue?: string;
  children: (props: FieldProps) => JSX.Element;
};

export default function Field(props: Props): JSX.Element {
  const { children, defaultValue } = props;
  const id = useId('field');
  const [value, setValue] = useState(defaultValue || '');

  return children({ id, value, setValue });
}
