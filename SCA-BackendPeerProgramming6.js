/*
Number of trailing zeros of N!
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

const zeros = (n) => {
  let result = 0;
  for (let index = 5; index <= n; index += 5) {
    let num = index;
    while (num % 5 === 0) {
      result++;
      num /= 5;
    }
  }
  return result;
}


/*
* test function
*/
const unitTest = () => {
  const testResult = [];
  (zeros(0) === 0) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (zeros(6) === 1) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  (zeros(12) === 2) ? testResult.push("Test 3 passed") : testResult.push("Test 3 failed");
  (zeros(30) === 7) ? testResult.push("Test 4 passed") : testResult.push("Test 4 failed");
  return testResult;
}

console.log(unitTest());
