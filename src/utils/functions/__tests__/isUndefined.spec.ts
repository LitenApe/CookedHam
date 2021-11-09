import { isUndefined } from '../isUndefined';

describe('utility function isUndefined', () => {
  test('returns "true" if value is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test('returns "false" if value is not undefined', () => {
    expect(isUndefined('')).toBe(false);
    expect(isUndefined('123')).toBe(false);

    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(1)).toBe(false);

    expect(isUndefined({})).toBe(false);
    expect(isUndefined({ foo: 'bar' })).toBe(false);

    expect(isUndefined([])).toBe(false);
    expect(isUndefined([1, 2])).toBe(false);

    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);

    expect(isUndefined(null)).toBe(false);
  });
});
