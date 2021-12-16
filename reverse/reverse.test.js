const reverse = require("./reverse.js");

const str = "affax";
const rStr = "xaffa";

const reversed = reverse(str);

test("should return string with capitalized first char", () => {
  expect(reversed).toBe(rStr);
});
