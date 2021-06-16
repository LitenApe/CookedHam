import { render, screen } from '@testing-library/react';
import useId from '../useId';

function TestComponent(props: { prefix?: string }) {
  const id = useId(props.prefix);
  return <p>{id}</p>;
}

describe('useId general behavior', () => {
  test('generates id with "kitchen" as default prefix', () => {
    render(<TestComponent />);
    screen.getByText(/kitchen/);
  });

  test('uses a dash after prefix', () => {
    render(<TestComponent />);
    screen.getByText(/kitchen-/);
  });

  test('appends a number after the prefix', () => {
    render(<TestComponent />);
    screen.getByText(/kitchen-\d+/);
  });

  test('uses custom prefix when supplied', () => {
    render(<TestComponent prefix="test-prefix" />);
    screen.getByText(/test-prefix-\d+/);
  });

  test('generate a new id when prefix is changed', () => {
    const { rerender } = render(<TestComponent prefix="test-one" />);
    screen.getByText(/test-one-\d+/);

    rerender(<TestComponent prefix="test-two" />);
    screen.getByText(/test-two-\d+/);
  });

  test('generated id increases with use of same prefix', () => {
    render(
      <>
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </>
    );

    const default_prefixes = screen.getAllByText(/kitchen/);

    expect(default_prefixes).toHaveLength(3);

    const [first, second, third] = default_prefixes.map((element) =>
      element.innerHTML.match(/\d+$/)?.pop()
    );

    expect(first).toBeDefined();
    expect(second).toBeDefined();
    expect(third).toBeDefined();

    expect(parseInt(first as string)).toBeLessThan(parseInt(second as string));
    expect(parseInt(second as string)).toBeLessThan(parseInt(third as string));
  });
});
