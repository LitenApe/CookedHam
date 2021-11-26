import { isEmpty } from './isEmpty';

export function concat(
  ...args: Array<string | boolean | undefined | null>
): string | undefined {
  const validStrings = args.filter(
    (arg): arg is string => typeof arg === 'string'
  );
  return isEmpty(validStrings) ? undefined : validStrings.join(' ');
}
