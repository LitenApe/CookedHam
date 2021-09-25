export function callAll(...args: Array<Function | undefined>) {
  return function (...params: Array<unknown>) {
    args.forEach((f) => f && f(...params));
  };
}
