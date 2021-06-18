import { render, screen } from '@testing-library/react';
import FormField from '../../utils/contexts/FormFieldContext';

import Label from './Label';

describe('Label general behavior', () => {
  test('has no id attribute by default', () => {
    render(<Label data-testid="test-component" />);
    const label = screen.getByTestId('test-component');

    expect(label).toBeDefined();
    expect(label).not.toHaveAttribute('for');
  });

  test('has id when wrapped by "FormControl"', () => {
    render(
      <FormField>
        <Label data-testid="test-component" />
      </FormField>
    );
    const label = screen.getByTestId('test-component');

    expect(label).toBeDefined();
    expect(label).toHaveAttribute('for');
  });
});
