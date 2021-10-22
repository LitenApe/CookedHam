export function callAll(...fns: Array<Function | undefined>) {
  const callable = fns.filter((fn): fn is Function => Boolean(fn));
  return function (...args: Array<unknown>) {
    callable.forEach((fn) => fn(...args));
  };
}
