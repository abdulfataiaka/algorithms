import containDuplicate from ".";

describe("Contain Duplicate", () => {
  test("to for multiple number and return false", () => {
    expect(containDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(false);
  });
});

describe("Contain Duplicate", () => {
  test("to check for multiple number, then return true", () => {
    expect(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
