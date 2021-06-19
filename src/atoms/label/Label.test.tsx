import { render, screen } from '@testing-library/react';
import FormField from '../../utils/contexts/FormFieldContext';

import Label from './Label';

describe('Label general behavior', () => {
  test('has no id attribute by default', () => {
    render(<Label data-testid="test-component" />);
    const label = screen.getByTestId('test-component');
    expect(label).not.toHaveAttribute('for');
  });

  test('has id when wrapped by "FormField"', () => {
    render(
      <FormField>
        <Label data-testid="test-component" />
      </FormField>
    );
    const label = screen.getByTestId('test-component');
    expect(label).toHaveAttribute('for');
  });

  test('overrides id from "FormField"', () => {
    const { rerender } = render(
      <FormField>
        <Label data-testid="test-component" />
      </FormField>
    );

    const input = screen.getByTestId('test-component');
    expect(input).toHaveAttribute('for');
    expect(input.getAttribute('for')).toContain('form-field');

    rerender(
      <FormField>
        <Label htmlFor="test-id" data-testid="test-component" />
      </FormField>
    );
    expect(input).toHaveAttribute('for', 'test-id');
  });
});
