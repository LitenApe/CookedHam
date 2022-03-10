import { act, render, screen } from '@testing-library/react';

import { Alert } from '.';

// suppressing warnings caused by async
// mount operation inside of component
const originalError = console.error;

describe('Alert general behavior', () => {
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

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
