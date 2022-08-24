function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenVals = {}

  for(number of array){
    const complement = target - number;
    if([complement] in seenVals){
      return true
    }else{
      seenVals[number] = true
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime: O(n)
  space: O(1)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 2, 5, 6, 0], 5));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 7, 8, 2, 4], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([6, 7, 3], 8));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 12));
}

module.exports = hasTargetSum;
