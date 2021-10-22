import { render, screen } from '@testing-library/react';
import Field from '../field/Field';

import Label from './Label';

describe('Label general behavior', () => {
  test('has no id attribute by default', () => {
    render(<Label data-testid="test-component" />);
    const label = screen.getByTestId('test-component');
    expect(label).not.toHaveAttribute('for');
  });

  test('has id when wrapped by "FormField"', () => {
    render(
      <Field>
        <Label data-testid="test-component" />
      </Field>
    );
    const label = screen.getByTestId('test-component');
    expect(label).toHaveAttribute('for');
  });

  test('overrides id from "FormField"', () => {
    const { rerender } = render(
      <Field>
        <Label data-testid="test-component" />
      </Field>
    );

    const input = screen.getByTestId('test-component');
    expect(input).toHaveAttribute('for');
    expect(input.getAttribute('for')).toContain('form-field');

    rerender(
      <Field>
        <Label htmlFor="test-id" data-testid="test-component" />
      </Field>
    );
    expect(input).toHaveAttribute('for', 'test-id');
  });
});
