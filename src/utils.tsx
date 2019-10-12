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

export function toNumber(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

export function toCurrencyNumber(value: string | number): string {
  const sanitized: string = typeof value === "number"
    ? value.toString()
    : toNumber(value);
  return new Intl.NumberFormat("nb-NO").format(Number(sanitized));
}
