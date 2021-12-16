const Operate = require("./calc.js");
const operation = new Operate(12, 6);
test("the code should succesfully subtract 2 numbers", () => {
  expect(operation.sub()).toBe(6);
});
test("the code should succesfully add 2 numbers", () => {
  expect(operation.add()).toBe(18);
});
test("the code should succesfully multiply 2 numbers", () => {
  expect(operation.multiply()).toBe(72);
});
test("the code should succesfully divide 2 numbers", () => {
  expect(operation.divide()).toBe(2);
});
