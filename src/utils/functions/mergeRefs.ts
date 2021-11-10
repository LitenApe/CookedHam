export function mergeRefs(...refs: Array<unknown>) {
  const filtered = refs.filter(Boolean);

  if (filtered.length <= 1) {
    return filtered[0];
  }

  return function merged<T extends HTMLElement>(ref: T) {
    filtered.forEach((item) => {
      try {
        // @ts-ignore
        item.current = ref;
      } catch (err) {
        console.warn(
          'Encountered an error while mergin refs. Ensure that all provided refs are of type RefObject'
        );
      }
    });
  };
}
