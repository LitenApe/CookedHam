import { uniqueId } from "../uniqueId";

describe("uniqueId", () => {
  it("returns default prefix with id '1' on first call", () => {
    const value = uniqueId();
    expect(value).toBe("dirty_1");
  });

  it("returns default prefix with id '2' on second call", () => {
    const value = uniqueId();
    expect(value).toBe("dirty_2");
  });

  it("returns supplied prefix with id '1' on first call", () => {
    const value = uniqueId("chef_");
    expect(value).toBe("chef_1");
  });

  it("returns supplied prefix with id '2' on second call", () => {
    const value = uniqueId("chef_");
    expect(value).toBe("chef_2");
  });
});
