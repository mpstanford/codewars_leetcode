//Dynamic Programming Solution:

var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  }
  var runningTotal = [Math.max(nums[1], nums[0]), nums[0]];

  for (var i = 2; i < nums.length; i++) {
    runningTotal.unshift(Math.max(nums[i] + runningTotal[1], runningTotal[0]));
  }

  return Math.max(runningTotal[0], runningTotal[1]);
};




//Recursive Solution:

// var rob = function(nums) {
//     var currentMaxMoney = 0;

//     var recurse = function(remaining, currentTotal) {
//         if (remaining.length <= 2) {
//             if (remaining.length === 2) {
//                 currentTotal += Math.max(remaining[0], remaining[1]);
//             } else if (remaining.length === 1){
//                 currentTotal += remaining[0]
//             }
//             currentMaxMoney = Math.max(currentTotal, currentMaxMoney);
//             return;
//         }

//         recurse(remaining.slice(2), currentTotal + remaining[0]);
//         recurse(remaining.slice(3), currentTotal + remaining[1])

//     }

//     recurse(nums, 0);
//     return currentMaxMoney;
// };