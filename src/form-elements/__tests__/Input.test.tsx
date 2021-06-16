import { render, screen } from '@testing-library/react';
import FormControl from '../FormControl';

import Input from '../Input';

describe('Label general behavior', () => {
  test('has no id attribute by default', () => {
    render(<Input data-testid="test-component" />);
    const label = screen.getByTestId('test-component');

    expect(label).toBeDefined();
    expect(label).not.toHaveAttribute('aria-labelledby');
  });

  test('has id when wrapped by "FormControl"', () => {
    render(
      <FormControl>
        <Input data-testid="test-component" />
      </FormControl>
    );
    const label = screen.getByTestId('test-component');

    expect(label).toBeDefined();
    expect(label).toHaveAttribute('aria-labelledby');
  });
});
