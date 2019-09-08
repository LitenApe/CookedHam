let lastId = 0;

export function newId(prefix = "id"): string {
  lastId += 1;
  return `${prefix}${lastId}`;
}
