import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '../radio/Radio';
import Radios from './Radios';

describe('Radios general behavior', () => {
  test('renders without crashing', () => {
    render(<Radios />);
  });

  test('renders children', () => {
    render(
      <Radios>
        <Radio value="1" />
        <Radio value="2" />
      </Radios>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
  });

  test('one event is emitted each click', () => {
    const mock = jest.fn();
    render(
      <Radios name="testing-group" onChange={mock}>
        <Radio value="1" />
        <Radio value="2" />
      </Radios>
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
});
