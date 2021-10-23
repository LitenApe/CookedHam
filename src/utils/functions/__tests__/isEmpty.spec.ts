import { isEmpty } from '../isEmpty';

describe('utility function isEmpty', () => {
  test('returns "true" if value is empty array', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([0, 1])).toBe(false);
  });

  test('returns "true" if value is empty object', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ foo: 'bar' })).toBe(false);
  });

  test('returns "true" if value is empty string', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('foo')).toBe(false);
  });

  test('returns "true" if value is undefined or null', () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
  });
});
