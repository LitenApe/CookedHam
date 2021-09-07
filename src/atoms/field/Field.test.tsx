import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Field from './Field';

describe('Field general behaviour', () => {
  test('renders without crashing', () => {
    render(<Field>{() => <></>}</Field>);
  });

  test('Field provides an id', () => {
    render(<Field>{({ id }) => <p>{id}</p>}</Field>);
    screen.getByText(/field-/);
  });

  test('Value is updated when setter is invoked', () => {
    render(
      <Field>
        {({ value, setValue }) => (
          <>
            <p data-testid="test-control">{value}</p>
            <input
              data-testid="test-input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </>
        )}
      </Field>
    );

    const controlElement = screen.getByTestId('test-control');
    const inputElement = screen.getByTestId('test-input');

    expect(controlElement).toBeEmptyDOMElement();

    userEvent.type(inputElement, 'the kitchen is dirty');

    expect(controlElement).toHaveTextContent('the kitchen is dirty');
  });
});
