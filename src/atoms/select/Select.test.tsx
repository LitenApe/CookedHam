import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select, OptionGroup, Option } from '.';
import { Field } from '../field';

describe('Select default behavior', () => {
  test('renders without crashing', () => {
    render(<Select />);
  });

  test('renders with id', () => {
    render(
      <Field>
        <Select data-testid="test-component" />
      </Field>
    );

    const dropdown = screen.getByTestId('test-component');
    expect(dropdown).toHaveAttribute('id');
  });

  test('call onChange on option click', () => {
    const mock = jest.fn();

    render(
      <Select onChange={mock} data-testid="test-component">
        <OptionGroup label="japanese">
          <Option value="fujifilm">Fujifilm</Option>
        </OptionGroup>
        <Option value="phase-one">Phase One</Option>
      </Select>
    );

    const dropdown = screen.getByTestId('test-component');

    expect(mock).not.toHaveBeenCalled();
    userEvent.selectOptions(dropdown, ['phase-one']);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('selected value is present in change event', () => {
    const mock = jest.fn();

    render(
      <Select onChange={mock} data-testid="test-component">
        <OptionGroup label="japanese">
          <Option value="fujifilm">Fujifilm</Option>
        </OptionGroup>
        <Option value="phase-one">Phase One</Option>
      </Select>
    );

    const options = screen.getAllByRole('option') as Array<HTMLOptionElement>;

    const dropdown = screen.getByTestId('test-component');
    userEvent.selectOptions(dropdown, ['phase-one']);

    expect(options[0].selected).toBe(false);
    expect(options[1].selected).toBe(true);
  });

  test('select multiple value is present in change event', () => {
    const mock = jest.fn();

    render(
      <Select onChange={mock} data-testid="test-component" multiple>
        <OptionGroup label="japanese">
          <Option value="fujifilm">Fujifilm</Option>
        </OptionGroup>
        <Option value="phase-one">Phase One</Option>
      </Select>
    );

    const dropdown = screen.getByTestId('test-component');
    userEvent.selectOptions(dropdown, ['fujifilm', 'phase-one']);
    expect(mock).toHaveBeenCalledTimes(2);

    const options = screen.getAllByRole('option') as Array<HTMLOptionElement>;
    expect(options[0].selected).toBe(true);
    expect(options[1].selected).toBe(true);
  });
});
