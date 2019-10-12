import { toNumber } from "../toNumber";

describe("toNumber", () => {
  it("return empty string by default", () => {
    expect(toNumber()).toBe("");
  });

  it("returns valid arabic-numeric as is", () => {
    const value = toNumber("123");
    expect(value).toBe("123");
  });

  it("remove space from argument", () => {
    const value = toNumber("1 2 3");
    expect(value).toBe("123");
  });

  it("remove letters from argument", () => {
    const value = toNumber("1a2b3c");
    expect(value).toBe("123");
  });

  it("remove symbols from argument", () => {
    const value = toNumber("1!2#3%");
    expect(value).toBe("123");
  });

  it("remove all symbols expect <period> from argument", () => {
    const value = toNumber("!@#$%^&*()_+/.,><?|}{[]");
    expect(value).toBe(".");
  });
});
