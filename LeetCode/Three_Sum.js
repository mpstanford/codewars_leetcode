var threeSum = function(nums) {
  var allTriplets = [];
  nums.sort((a,b) => {return a - b;});

  for (var firstIndex = 0; firstIndex < nums.length - 2; firstIndex++) {
    if (firstIndex > 0 && nums[firstIndex] === nums[firstIndex - 1]) {
      continue;
    }
    var secondIndex = firstIndex + 1;
    var thirdIndex = nums.length - 1;

    while (secondIndex < thirdIndex) {
      var sum = nums[firstIndex] + nums[secondIndex] + nums[thirdIndex];

      if (sum < 0) {
        secondIndex++;
      } else if (sum > 0) {
        thirdIndex--;
      } else {
        allTriplets.push([nums[firstIndex], nums[secondIndex], nums[thirdIndex]]);
        secondIndex++;
        while (nums[secondIndex] === nums[secondIndex - 1] && secondIndex < thirdIndex) {
          secondIndex++;
        }
      }
    }

  }
  return allTriplets;
};

console.log(threeSum([-1,0,1,2,-1,-4]));