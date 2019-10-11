interface IdHistoryInterface {
  [key: string]: number;
}

const idHistory: IdHistoryInterface = {};

export function newId(prefix = "id-"): string {
  if (!idHistory[prefix]) {
    idHistory[prefix] = 0;
  }

  return `${prefix}${++idHistory[prefix]}`;
}
