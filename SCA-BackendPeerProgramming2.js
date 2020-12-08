/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
Note: String will have at least one element; words will always be separated by a space.
*/

const addLength = (string) => {
  return string.split(" ").map(word => `${word} ${word.length}`);
}

/*
* unit test
*/
const unitTest = () => {
  const testResult = [];
  (addLength('apple ban').join() === ["apple 5", "ban 3"].join()) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (addLength('you will win').join() === ["you 3", "will 4", "win 3"].join()) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  return testResult;
}

console.log(unitTest());
