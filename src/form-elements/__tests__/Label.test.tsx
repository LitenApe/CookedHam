import { render, screen } from '@testing-library/react';
import FormControl from '../FormControl';

import Label from '../Label';

describe('Label general behavior', () => {
  test('has no id attribute by default', () => {
    render(<Label data-testid="test-component" />);
    const label = screen.getByTestId('test-component');

    expect(label).toBeDefined();
    expect(label).not.toHaveAttribute('id');
  });

  test('has id when wrapped by "FormControl"', () => {
    render(
      <FormControl>
        <Label data-testid="test-component" />
      </FormControl>
    );
    const label = screen.getByTestId('test-component');

    expect(label).toBeDefined();
    expect(label).toHaveAttribute('id');
  });
});
