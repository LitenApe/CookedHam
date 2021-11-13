import { render, screen } from '@testing-library/react';
import { Input } from '.';
import { Field } from '../field';

describe('Input default behavior', () => {
  test('renders without crashing', () => {
    render(<Input />);
  });

  test('renders as "input" by default', () => {
    render(<Input />);
    const element = screen.getByRole('textbox');
    expect(element.nodeName).toBe('INPUT');
  });

  test('renders as "textarea" when specified', () => {
    render(<Input as="textarea" />);
    const element = screen.getByRole('textbox');
    expect(element.nodeName).toBe('TEXTAREA');
  });

  test('has type "text" by default', () => {
    render(<Input />);
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('type', 'text');
  });

  test('has type "tel" when specified', () => {
    render(<Input type="tel" />);
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('type', 'tel');
  });

  test('has "id" when wrapped by "Field"', () => {
    render(
      <Field>
        <Input />
      </Field>
    );
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('id');
  });
});
