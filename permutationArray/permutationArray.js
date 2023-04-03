const buildArray = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};

module.exports = buildArray;
nums = [0, 2, 1];
buildArray(nums);
