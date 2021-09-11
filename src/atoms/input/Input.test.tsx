import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Field from '../field/Field';

import Input from './Input';

describe('Label general behavior', () => {
  test('renders as input', () => {
    render(<Input data-testid="test-component" />);
    const input = screen.getByTestId('test-component');
    expect(input.nodeName).toBe('INPUT');
  });

  test('has no id attribute by default', () => {
    render(<Input data-testid="test-component" />);
    const input = screen.getByTestId('test-component');
    expect(input).not.toHaveAttribute('id');
  });

  test('has id when wrapped by "FormField"', () => {
    render(
      <Field>
        <Input data-testid="test-component" />
      </Field>
    );
    const input = screen.getByTestId('test-component');
    expect(input).toHaveAttribute('id');
  });

  test('overrides id from "FormField"', () => {
    const { rerender } = render(
      <Field>
        <Input data-testid="test-component" />
      </Field>
    );

    const input = screen.getByTestId('test-component');
    expect(input).toHaveAttribute('id');
    expect(input.getAttribute('id')).toContain('form-field');

    rerender(
      <Field>
        <Input id="test-id" data-testid="test-component" />
      </Field>
    );
    expect(input).toHaveAttribute('id', 'test-id');
  });

  test('refs are attached to DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    const value = 'Skies of Blue';
    render(<Input ref={ref} value={value} onChange={jest.fn()} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toHaveValue(value);
  });
});
