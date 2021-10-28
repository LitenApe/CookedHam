import { renderHook } from '@testing-library/react-hooks';
import { useMount } from '../useMount';

describe('useMount general behaviour', () => {
  test('invokes supplied callback', () => {
    const mock = jest.fn();
    renderHook(() => useMount(mock));
    expect(mock).toBeCalledTimes(1);
  });

  test('callback is only invoked once', () => {
    const mock = jest.fn();
    const { rerender, unmount } = renderHook(() => useMount(mock));

    expect(mock).toBeCalledTimes(1);
    rerender();
    expect(mock).toBeCalledTimes(1);
    unmount();
    expect(mock).toBeCalledTimes(1);
  });
});
