import { render, screen } from '@testing-library/react';
import FormControl, { useFormControlContext } from '../FormControl';

function TestComponent() {
  const { id } = useFormControlContext();
  return <p data-testid="test-element">{id}</p>;
}

describe('FormControl general behavior', () => {
  test('generates an id', () => {
    render(
      <FormControl>
        <TestComponent />
      </FormControl>
    );
    const container = screen.getByTestId('test-element');
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  test('prefixes id with "form-control"', () => {
    render(
      <FormControl>
        <TestComponent />
      </FormControl>
    );
    screen.getByText(/form-control/);
  });
});
