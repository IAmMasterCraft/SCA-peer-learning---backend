/*
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example:

prime(11);
Should return an array that looks like this:

[2, 3, 5, 7, 11]
*/

const prime = (number) => {
  return [...Array(number).keys()].map(integer => ++integer).filter(possiblePrime => isPrime(possiblePrime));
}

const isPrime = (n) => {
  if (n >= 0 && n < 2) return false;
  if (n === 2) return true;
  for (let index = 2; index < n; index++) {
    if (n % index === 0) return false;
  }
  return true;
}

/*
* unit test
*/
const unitTest = () => {
  const testResult = [];
  (prime(0).join() === [].join()) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (prime(1).join() === [].join()) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  (prime(2).join() === [2].join()) ? testResult.push("Test 3 passed") : testResult.push("Test 3 failed");
  (prime(11).join() === [2, 3, 5, 7, 11].join()) ? testResult.push("Test 4 passed") : testResult.push("Test 4 failed");
  (prime(23).join() === [2, 3, 5, 7, 11, 13, 17, 19, 23].join()) ? testResult.push("Test 5 passed") : testResult.push("Test 5 failed");
  return testResult;
}

console.log(unitTest());
