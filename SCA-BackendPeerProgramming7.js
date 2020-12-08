/*
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051
The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.
*/

const hamming = (n) => {
  const sequence = [1];
  let length = sequence.length;
  let candidate = 2;
  while (length < n) {
    if (isHamming(candidate)) {
      sequence[length] = candidate;
      length++;
    }
    candidate++;
  }
  return sequence[sequence.length - 1];
}

const isHamming = (number) => {
  while (number % 2 === 0) number /= 2;
  while (number % 3 === 0) number /= 3;
  while (number % 5 === 0) number /= 5;
  // return true;
  return number === 1;
}


/* test function
*/
const unitTest = () => {
  const testResult = [];
  (hamming(1) === 1) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (hamming(2) === 2) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  (hamming(3) === 3) ? testResult.push("Test 3 passed") : testResult.push("Test 3 failed");
  (hamming(4) === 4) ? testResult.push("Test 4 passed") : testResult.push("Test 4 failed");
  (hamming(5) === 5) ? testResult.push("Test 5 passed") : testResult.push("Test 5 failed");
  (hamming(6) === 6) ? testResult.push("Test 6 passed") : testResult.push("Test 6 failed");
  (hamming(7) === 8) ? testResult.push("Test 7 passed") : testResult.push("Test 7 failed");
  (hamming(8) === 9) ? testResult.push("Test 8 passed") : testResult.push("Test 8 failed");
  (hamming(9) === 10) ? testResult.push("Test 9 passed") : testResult.push("Test 9 failed");
  (hamming(10) === 12) ? testResult.push("Test 10 passed") : testResult.push("Test 10 failed");
  (hamming(11) === 15) ? testResult.push("Test 11 passed") : testResult.push("Test 11 failed");
  (hamming(12) === 16) ? testResult.push("Test 12 passed") : testResult.push("Test 12 failed");
  (hamming(13) === 18) ? testResult.push("Test 13 passed") : testResult.push("Test 13 failed");
  (hamming(14) === 20) ? testResult.push("Test 14 passed") : testResult.push("Test 14 failed");
  (hamming(15) === 24) ? testResult.push("Test 15 passed") : testResult.push("Test 15 failed");
  (hamming(16) === 25) ? testResult.push("Test 16 passed") : testResult.push("Test 16 failed");
  (hamming(17) === 27) ? testResult.push("Test 17 passed") : testResult.push("Test 17 failed");
  (hamming(18) === 30) ? testResult.push("Test 18 passed") : testResult.push("Test 18 failed");
  (hamming(19) === 32) ? testResult.push("Test 19 passed") : testResult.push("Test 19 failed");
  return testResult;
}

console.log(unitTest());
