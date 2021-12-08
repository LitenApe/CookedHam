import { isEmpty } from './isEmpty';

export function concat(
  ...args: Array<string | boolean | undefined | null>
): string | undefined {
  const validStrings = args.filter(
    (arg): arg is string => typeof arg === 'string'
  );
  return isEmpty(validStrings)
    ? undefined
    : validStrings.reduce<string>((acc, value) => {
        if (acc.indexOf(value) === -1) {
          acc += ` ${value}`;
        }

        return acc.trim();
      }, '');
}
