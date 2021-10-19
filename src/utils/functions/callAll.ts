export function callAll(...fns: Array<Function | undefined>) {
  return function (...args: Array<unknown>) {
    fns.forEach((fn) => fn && fn(...args));
  };
}
