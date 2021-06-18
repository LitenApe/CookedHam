import { render, screen } from '@testing-library/react';
import FormField, { useFormFieldContext } from '../FormFieldContext';

function TestComponent() {
  const { id } = useFormFieldContext();
  return <p data-testid="test-element">{id}</p>;
}

describe('FormControl general behavior', () => {
  test('generates an id', () => {
    render(
      <FormField>
        <TestComponent />
      </FormField>
    );
    const container = screen.getByTestId('test-element');
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  test('prefixes id with "form-field"', () => {
    render(
      <FormField>
        <TestComponent />
      </FormField>
    );
    screen.getByText(/form-field/);
  });
});
