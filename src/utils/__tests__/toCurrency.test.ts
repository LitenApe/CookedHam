import { toCurrency } from "../toCurrency";

describe("toCurrency", () => {
  it("returns Norwegian format when 'nb-NO' is sent as locale", () => {
    const number = 123456.789;
    const value = toCurrency("nb-NO")(number);
    expect(value).toBe("123 456,789");
  });

  it("returns German format when 'de-DE' is sent as locale", () => {
    const number = 123456.789;
    const value = toCurrency("de-DE")(number);
    expect(value).toBe("123.456,789");
  });

  it("returns English International format when 'en-IT' is sent as locale", () => {
    const number = 123456.789;
    const value = toCurrency("en-IT")(number);
    expect(value).toBe("123,456.789");
  });
});
