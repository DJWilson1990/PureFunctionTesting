import { expect, test } from "vitest";

import {
  sum,
  subtract,
  countLetters,
  divide,
  multiply,
  isAnagram,
  isPalindrome,
} from "./challenge.js";

test("sum", function () {
  const expected = 2;
  const actual = sum(1, 1);
  expect(actual).toBe(expected);
});

test("subtract", function () {
  const expected = 4;
  const actual = subtract(10, 6);
  expect(actual).toBe(expected);
});

test("multiply", function () {
  const expected = 20;
  const actual = multiply(4, 5);
  expect(actual).toBe(expected);
});

test("divide", function () {
  const expected = 3;
  const actual = divide(9, 3);
  expect(actual).toBe(expected);
});
