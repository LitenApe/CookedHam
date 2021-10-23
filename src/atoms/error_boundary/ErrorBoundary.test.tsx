import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

function ErrorButton(): JSX.Element {
  throw new Error('test error');
}

describe('ErrorBoundary default behavior', () => {
  test('renders without crashing', () => {
    render(
      <ErrorBoundary fallback={() => <></>}>
        <p>child</p>
      </ErrorBoundary>
    );
  });

  test('renders children by default', () => {
    render(
      <ErrorBoundary fallback={() => <></>}>
        <p>test content</p>
      </ErrorBoundary>
    );

    screen.getByText('test content');
  });

  test('renders fallback on error', () => {
    const original = global.console.error;
    global.console.error = jest.fn();

    render(
      <ErrorBoundary fallback={() => <p>fallback component rendered</p>}>
        <p>test content</p>
        <ErrorButton />
      </ErrorBoundary>
    );

    screen.getByText('fallback component rendered');

    global.console.error = original;
  });

  test('logger is invoked on error', () => {
    const original = global.console.error;
    global.console.error = jest.fn();

    const mock = jest.fn();
    render(
      <ErrorBoundary logger={mock} fallback={() => <></>}>
        <ErrorButton />
      </ErrorBoundary>
    );

    expect(mock).toBeCalledTimes(1);
    expect(mock.mock.calls[0]).toHaveLength(2);

    global.console.error = original;
  });
});
