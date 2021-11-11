import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '../radio/Radio';
import RadioGroup from './RadioGroup';

describe('Radios general behavior', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders without crashing', () => {
    render(<RadioGroup />);
  });

  test('renders children', () => {
    render(
      <RadioGroup>
        <Radio value="1" />
        <Radio value="2" />
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
  });

  test('one event is emitted each click', () => {
    const mock = jest.fn();
    render(
      <RadioGroup name="testing-group" onChange={mock}>
        <Radio value="1" />
        <Radio value="2" />
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');

    expect(radios).toHaveLength(2);
    expect(mock).not.toBeCalled();

    const [radioOne, radioTwo] = radios;

    userEvent.click(radioOne);
    expect(mock).toBeCalledTimes(1);
    expect(mock.mock.calls[0][0]?.target?.value).toBe('1');

    userEvent.click(radioTwo);
    expect(mock).toBeCalledTimes(2);
    expect(mock.mock.calls[1][0]?.target?.value).toBe('2');

    userEvent.click(radioOne);
    expect(mock).toBeCalledTimes(3);
    expect(mock.mock.calls[2][0]?.target?.value).toBe('1');
  });

  test('onBlur is not invoked when focus remains inside of group', () => {
    const mock = jest.fn();
    render(
      <RadioGroup name="testing-group" onBlur={mock}>
        <Radio value="1" />
        <Radio value="2" />
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');

    expect(mock).not.toHaveBeenCalled();
    radios[0].focus();
    jest.runAllTimers();
    expect(mock).not.toHaveBeenCalled();
    radios[1].focus();
    jest.runAllTimers();
    expect(mock).not.toHaveBeenCalled();
  });

  test('onBlur is invoked when focus moves outside of radio group', () => {
    const mock = jest.fn();
    render(
      <RadioGroup name="testing-group" onBlur={mock}>
        <Radio value="1" />
        <Radio value="2" />
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');

    expect(mock).toHaveBeenCalledTimes(0);
    radios[0].focus();
    radios[0].blur();
    jest.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
