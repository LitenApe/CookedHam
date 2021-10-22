import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
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

  test('refs are attached to DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio ref={ref} checked onChange={jest.fn()} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeChecked();
  });
});
