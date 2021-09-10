import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import Field, { useField } from './Field';

function Consumer(props: ComponentProps<'input'>) {
  const { getFieldProps } = useField();
  const { id, ...rest } = getFieldProps(props);
  return (
    <>
      <label htmlFor={id}>Test</label>
      <input id={id} {...rest}></input>
    </>
  );
}

describe('Field general behaviour', () => {
  test('renders without crashing', () => {
    render(<Field></Field>);
  });

  test('Field provides an id', () => {
    render(
      <Field>
        <Consumer />
      </Field>
    );
    const input = screen.getByLabelText('Test');
    expect(input.id).not.toBeUndefined();
  });

  test('Field prefixes provided id with "form-field"', () => {
    render(
      <Field>
        <Consumer />
      </Field>
    );
    const input = screen.getByLabelText('Test');
    expect(input.id).toMatch(/form-field/);
  });

  test('Props is forwarded', () => {
    const mock = jest.fn();
    render(
      <Field onChange={mock}>
        <Consumer />
      </Field>
    );
    const input = screen.getByText('Test');

    expect(mock).not.toHaveBeenCalled();

    const testInput = 'cats looming in the shadow';
    userEvent.type(input, testInput);

    expect(mock).toHaveBeenCalledTimes(testInput.length);
  });
});
