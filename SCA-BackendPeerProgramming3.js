/*
*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  == 3  # 1, 2, 4
divisors(5)  == 2  # 1, 5
divisors(12) == 6  # 1, 2, 3, 4, 6, 12
divisors(30) == 8  # 1, 2, 3, 5, 6, 10, 15, 30
*/

const divisors = (n) => {
  return [...Array(n).keys()].map(integer => ++integer).filter(possibleDivisor => {return n % possibleDivisor === 0}).length;
}


/*
* test function
*/
const unitTest = () => {
  const testResult = [];
  (divisors(4) === 3) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (divisors(5) === 2) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  (divisors(12) === 6) ? testResult.push("Test 3 passed") : testResult.push("Test 3 failed");
  (divisors(30) === 8) ? testResult.push("Test 4 passed") : testResult.push("Test 4 failed");
  (divisors(4096) === 13) ? testResult.push("Test 5 passed") : testResult.push("Test 5 failed");
  return testResult;
}


console.log(unitTest());
