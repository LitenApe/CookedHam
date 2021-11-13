import { isEmpty } from './isEmpty';

export function concat(
  ...args: Array<string | boolean | undefined | null>
): string | undefined {
  const validStrings = args.filter(
    (arg): arg is string => typeof arg === 'string'
  );
  const result = validStrings.join(' ');
  return isEmpty(result) ? undefined : result;
}
