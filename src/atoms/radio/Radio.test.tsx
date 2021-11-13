import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Field } from '../field';
import Radio from './Radio';

describe('Radio general behavior', () => {
  test('renders as input', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio.nodeName).toBe('INPUT');
  });

  test('is of type "radio"', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('type', 'radio');
  });

  test('not checked initially', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).not.toBeChecked();
  });

  test('is checked after click', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');

    userEvent.click(radio);
    expect(radio).toBeChecked();
  });

  test('refs are attached to DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio ref={ref} checked onChange={jest.fn()} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeChecked();
  });

  test('has "id" when wrapped by "Field"', () => {
    render(
      <Field>
        <Radio />
      </Field>
    );
    const element = screen.getByRole('radio');
    expect(element).toHaveAttribute('id');
  });
});
