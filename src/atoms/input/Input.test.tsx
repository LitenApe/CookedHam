import { render, screen } from '@testing-library/react';
import FormField from '../../utils/contexts/FormFieldContext';

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

    expect(input).toBeDefined();
    expect(input).not.toHaveAttribute('id');
  });

  test('has id when wrapped by "FormControl"', () => {
    render(
      <FormField>
        <Input data-testid="test-component" />
      </FormField>
    );
    const input = screen.getByTestId('test-component');

    expect(input).toBeDefined();
    expect(input).toHaveAttribute('id');
  });
});
