var rob = function(nums) {
    var currentMaxMoney = 0;

    var recurse = function(remaining, currentTotal) {
        if (remaining.length <= 2) {
            if (remaining.length === 2) {
                currentTotal += Math.max(remaining[0], remaining[1]);
            } else if (remaining.length === 1){
                currentTotal += remaining[0]
            }
            currentMaxMoney = Math.max(currentTotal, currentMaxMoney);
            return;
        }

        recurse(remaining.slice(2), currentTotal + remaining[0]);
        recurse(remaining.slice(3), currentTotal + remaining[1])

    }

    recurse(nums, 0);
    return currentMaxMoney;
};