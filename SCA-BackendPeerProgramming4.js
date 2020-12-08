/*
Your task:
Check if a given input is a valid triangle number. Return true if it is, false if it is not (note that any non-integers, including non-number types, are not triangle numbers).

You are encouraged to develop an effective algorithm: test cases include really big numbers.

Assumptions:
You may assume that the given input, if it is a number, is always positive.

Notes:
0 and 1 are triangle numbers.
*/

const isTriangleNumber = (number) => {
  return (number === 0) ? true : (number === 1) ? true : (typeof number !== "number" && number % 1 === 0) ? false : ((((8*number) + 1) ** (1/2)) % 1 === 0) ? true : false;
}


/*
* test function
*/
const unitTest = () => {
  const testResult = [];
  (isTriangleNumber(3) === true) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (isTriangleNumber(5) === false) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  (isTriangleNumber("hello") === false) ? testResult.push("Test 3 passed") : testResult.push("Test 3 failed");
  (isTriangleNumber(6.15) === false) ? testResult.push("Test 4 passed") : testResult.push("Test 4 failed");
  return testResult;
}


console.log(unitTest());
