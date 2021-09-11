import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import Checkbox from './Checkbox';

describe('Radio general behavior', () => {
  test('renders as input', () => {
    render(<Checkbox data-testid="test-component" />);
    const checkbox = screen.getByTestId('test-component');
    expect(checkbox.nodeName).toBe('INPUT');
  });

  test('is of type "checkbox"', () => {
    render(<Checkbox data-testid="test-component" />);
    const checkbox = screen.getByTestId('test-component');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  test('not checked initially', () => {
    render(<Checkbox data-testid="test-component" />);
    const checkbox = screen.getByTestId('test-component');
    expect(checkbox).not.toBeChecked();
  });

  test('is checked after click', () => {
    render(<Checkbox data-testid="test-component" />);
    const checkbox = screen.getByTestId('test-component');

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('refs are attached to DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} checked onChange={jest.fn()} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeChecked();
  });
});
