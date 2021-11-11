import { render, screen } from '@testing-library/react';
import { createElement, createRef, useRef } from 'react';
import { mergeRefs } from '../mergeRefs';

describe('mergeRefs default behavior', () => {
  test('returns undefined when invoked with nothing', () => {
    const res = mergeRefs();
    expect(res).toBeUndefined();
  });

  test('returns undefined when arg is null', () => {
    const res = mergeRefs(null);
    expect(res).toBeUndefined();
  });

  test('returns arg when invoked with only one arg', () => {
    const testObj = {};
    const res = mergeRefs(testObj);
    expect(res).toBe(testObj);
  });

  test('falsy args are ignored', () => {
    const testObj = {};
    const res = mergeRefs(undefined, testObj, null, undefined);
    expect(res).toBe(testObj);
  });

  test('ref is attached to "current" key', () => {
    const testObj = { current: undefined };
    const testObjTwo = { current: undefined };
    const res = mergeRefs(testObj, testObjTwo);

    // @ts-ignore
    res('foo bar');

    expect(testObj.current).toBe('foo bar');
    expect(testObjTwo.current).toBe('foo bar');
  });

  test('refs are merged when used with element ref', () => {
    const testOne = createRef();
    const testTwo = { current: undefined };

    render(createElement('button', { ref: mergeRefs(testOne, testTwo) }));

    const element = screen.getByRole('button');
    expect(testOne.current).toBe(element);
    expect(testTwo.current).toBe(element);
  });
});
