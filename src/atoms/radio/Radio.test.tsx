import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from './Radio';

describe('Radio general behavior', () => {
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

  test('not checked initially', () => {
    render(<Radio data-testid="test-component" />);
    const radio = screen.getByTestId('test-component');
    expect(radio).not.toBeChecked();
  });

  test('is checked after click', () => {
    render(<Radio data-testid="test-component" />);
    const radio = screen.getByTestId('test-component');

    userEvent.click(radio);
    expect(radio).toBeChecked();
  });
});
