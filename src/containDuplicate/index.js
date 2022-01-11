// O(2n) = O(n) using iteration
const containDuplicate = (nums) => {
  let resultToReturn = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // prevent element of th index
      if (i !== j) {
        // check for element with same values
        if (nums[i] === nums[j]) {
          resultToReturn = true;
        }
      }
    }
  }

  return resultToReturn;
};

module.exports = containDuplicate;
