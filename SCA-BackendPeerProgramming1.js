//This code does not execute properly. Try to figure out why.
//the function does not return anything
function multiply(a, b){
  let result
  try {
    result = a * b;
  } catch (error) {
    console.log(error.message);
  }
  return result;
}


/*
* test function
*/
const unitTest = () => {
  const testResult = [];
  (multiply(1, 1) === 1) ? testResult.push("Test 1 passed") : testResult.push("Test 1 failed");
  (multiply(2, 1) === 2) ? testResult.push("Test 2 passed") : testResult.push("Test 2 failed");
  (multiply(2, 2) === 4) ? testResult.push("Test 3 passed") : testResult.push("Test 3 failed");
  (multiply(3, 5) === 15) ? testResult.push("Test 4 passed") : testResult.push("Test 4 failed");
  return testResult;
}


console.log(unitTest());
