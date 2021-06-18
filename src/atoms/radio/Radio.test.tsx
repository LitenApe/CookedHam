import { render, screen } from '@testing-library/react';
import Radio from './Radio';

describe('Radio general behaviour', () => {
  test('renders as input', () => {
    render(<Radio data-testid="test-component" />);
    const radio = screen.getByTestId('test-component');
    expect(radio.nodeName).toBe('INPUT');
  });

  test('is of type "radio"', () => {
    render(<Radio data-testid="test-component" />);
    const radio = screen.getByTestId('test-component');
    expect(radio).toHaveAttribute('type', 'radio');
  });
});
