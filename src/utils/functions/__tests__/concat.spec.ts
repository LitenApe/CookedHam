import { concat } from '../concat';

describe('concat default befavior', () => {
  test('returns nothing when invoked with no args', () => {
    const res = concat();
    expect(res).not.toBeDefined();
  });

  test('returns nothing when invoked with non string values', () => {
    const res = concat(false, true, undefined, null);
    expect(res).not.toBeDefined();
  });

  test('returns string with same value when sent one arg', () => {
    const res = concat('test');
    expect(res).toBe('test');
  });

  test('returns space separated string when invoked with multiple args', () => {
    const res = concat('foo', 'bar', 'kable mo');
    expect(res).toBe('foo bar kable mo');
  });

  test('remove duplicate strings', () => {
    const res = concat('foo', 'bar', 'foo bar', 'zap', 'bar');
    expect(res).toBe('foo bar zap');
  });
});
