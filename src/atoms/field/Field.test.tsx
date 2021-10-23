import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Field, FieldContext } from '.';

describe('Field general behaviour', () => {
  test('renders without crashing', () => {
    render(<Field></Field>);
  });

  test('Field provides an id', () => {
    render(
      <Field>
        <FieldContext.Consumer>
          {({ getFieldProps }) => (
            <input {...getFieldProps({})} data-testid="test" />
          )}
        </FieldContext.Consumer>
      </Field>
    );
    const input = screen.getByTestId('test');
    expect(input.id).not.toBeUndefined();
  });

  test('Field prefixes provided id with "form-field"', () => {
    render(
      <Field>
        <FieldContext.Consumer>
          {({ getFieldProps }) => (
            <input {...getFieldProps({})} data-testid="test" />
          )}
        </FieldContext.Consumer>
      </Field>
    );
    const input = screen.getByTestId('test');
    expect(input.id).toMatch(/form-field/);
  });

  test('Props is forwarded', () => {
    const mock = jest.fn();
    render(
      <Field onChange={mock}>
        <FieldContext.Consumer>
          {({ getFieldProps }) => (
            <input {...getFieldProps({})} data-testid="test" />
          )}
        </FieldContext.Consumer>
      </Field>
    );
    const input = screen.getByTestId('test');

    expect(mock).not.toHaveBeenCalled();

    const testInput = 'cats looming in the shadow';
    userEvent.type(input, testInput);

    expect(mock).toHaveBeenCalledTimes(testInput.length);
  });
});
