import { callAll } from '../callAll';

describe('utility function callAll', () => {
  test('returns a function on initiation', () => {
    const fn = callAll();
    expect(typeof fn).toBe('function');
  });

  test('calls all arguments when invoked', () => {
    const mock = jest.fn();
    const fn = callAll(mock, mock, mock);

    expect(mock).not.toBeCalled();
    fn();
    expect(mock).toBeCalledTimes(3);
  });

  test('calls all arguments when invoked with paramters', () => {
    const mock = jest.fn();
    const fn = callAll(mock, mock, mock);

    const testString = 'cookies is the best snack';
    fn(testString);
    expect(mock).toBeCalledTimes(3);
    mock.mock.calls.forEach((args) => expect(args[0]).toBe(testString));
  });
});
