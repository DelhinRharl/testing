const stringLen = require("./string.js");

test("the string length should return 7", () => {
  const str = "Morning";
  const result = stringLen(str);
  expect(result).toBe(7);
});

test("the string length should have a maximum of 10 chars", () => {
  const str = "maximummax";

  const result = stringLen(str);

  expect(result).not.toBeGreaterThan(10);
});

test("the string length should have a minimum of 1 char", () => {
  const str = "m";

  const result = stringLen(str);

  expect(result).not.toBeLessThan(1);
});
