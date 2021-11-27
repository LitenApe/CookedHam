import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import Button from './Button';

describe('Button general behavior', () => {
  test('renders button text', () => {
    render(<Button>Test</Button>);
    screen.getByText('Test');
  });

  test('click handler is invoked', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Test</Button>);
    const button = screen.getByText('Test');

    expect(mockOnClick).toBeCalledTimes(0);
    userEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('is type of "button" by default', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('type can be overriden', () => {
    render(<Button type="submit">Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('renders as button element by default', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText('Test');
    expect(button.nodeName).toEqual('BUTTON');
  });

  test('renders as anchor element when overriden', () => {
    render(<Button as="a">Test</Button>);
    const button = screen.getByText('Test');
    expect(button.nodeName).toEqual('A');
  });

  test('refs are attached to DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Test</Button>);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toHaveTextContent('Test');
  });

  test('disabled suppresses click event', () => {
    const mock = jest.fn();
    render(
      <Button onClick={mock} disabled>
        test
      </Button>
    );
    const button = screen.getByRole('button');

    expect(mock).not.toHaveBeenCalled();
    userEvent.click(button);
    expect(mock).not.toHaveBeenCalled();
  });

  test('aria-disabled suppresses click event', () => {
    const mock = jest.fn();
    render(
      <Button onClick={mock} aria-disabled>
        test
      </Button>
    );
    const button = screen.getByRole('button');

    expect(mock).not.toHaveBeenCalled();
    userEvent.click(button);
    expect(mock).not.toHaveBeenCalled();
  });

  test('aria-disabled is used when button is disabled', () => {
    const { rerender } = render(<Button disabled>test</Button>);
    const button = screen.getByRole('button');

    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');

    rerender(<Button aria-disabled>test</Button>);

    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
