import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import DangerousHTML from './DangerousHTML';

describe('DangerousHTML default behavior', () => {
  test('renders without crashing', () => {
    render(<DangerousHTML content="" />);
  });

  test('renders as "div" by default', () => {
    render(<DangerousHTML content="" data-testid="test-container" />);

    const container = screen.getByTestId('test-container');
    expect(container.nodeName).toBe('DIV');
  });

  test('renders as "a" when specified', () => {
    render(<DangerousHTML as="a" content="" data-testid="test-container" />);

    const container = screen.getByTestId('test-container');
    expect(container.nodeName).toBe('A');
  });

  test('renders HTML string as HTML', () => {
    render(<DangerousHTML content="<button id='test-id'>test</button>" />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('test');
    expect(button).toHaveAttribute('id', 'test-id');
  });

  test('ref is forwarded properly', () => {
    const ref = createRef<HTMLDivElement>();
    render(<DangerousHTML ref={ref} content="test-text" />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toHaveTextContent('test-text');
  });
});
