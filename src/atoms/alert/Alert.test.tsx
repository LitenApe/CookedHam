import { act, render, screen } from '@testing-library/react';
import { Alert } from '.';

describe('Alert general behavior', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('renders without crashing', () => {
    render(<Alert></Alert>);
  });

  test('content is deferred', () => {
    render(<Alert data-testid="test-alert">alert message content</Alert>);
    const container = screen.getByTestId('test-alert');
    expect(container).toBeEmptyDOMElement();
  });

  test('content is mounted after timer runs out', async () => {
    render(<Alert data-testid="test-alert">alert message content</Alert>);
    const container = screen.getByTestId('test-alert');
    expect(container).toBeEmptyDOMElement();

    act(() => {
      jest.runAllTimers();
    });

    expect(container).not.toBeEmptyDOMElement();
    expect(container).toHaveTextContent('alert message content');
  });
});
