import { toNumberFormat } from "../toNumberFormat";

describe("toNumberFormat", () => {
  it("converts numbers to NO phone format and discard overflow", () => {
    const res = toNumberFormat("### ## ###")("123456789");
    expect(res).toBe("123 45 678");
  });

  it("converts numbers to NO ssn format and discard overflow", () => {
    const res = toNumberFormat("###### #####")("1234567891234");
    expect(res).toBe("123456 78912");
  });

  it("converts numbers to date format and discard overflow", () => {
    const res = toNumberFormat("##/##/####")("1234567891234");
    expect(res).toBe("12/34/5678");
  });

  it("converts numbers to account nr format and discard overflow", () => {
    const res = toNumberFormat("####.##.#####")("1234567891234");
    expect(res).toBe("1234.56.78912");
  });

  it("converts short argument to match mask without crashing", () => {
    const res = toNumberFormat("### ## ###")("1234");
    expect(res).toBe("123 4");
  });
});
