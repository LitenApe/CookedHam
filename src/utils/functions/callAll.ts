import { isDefined } from './isDefined';

/**
 * Calls all supplied functions with the same arguments.
 * Mainly used for cases where multiple functions needs to
 * be invoked with the same arguments.
 *
 * @param fns {Array<Function | undefined | null>} all the function we want to invoke
 * @returns {Function} returns a function which can be invoked to call all the previous funtions with supplied arguments
 */
export function callAll(
  ...fns: Array<Function | undefined | null>
): (...args: Array<unknown>) => void {
  const callable = fns.filter(isDefined);
  return function (...args: Array<unknown>): void {
    callable.forEach((fn) => fn(...args));
  };
}
