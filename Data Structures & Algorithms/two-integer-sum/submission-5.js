class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i< nums.length; i++){
            let temp = target - nums[i];
            if(nums.includes(temp, i+1)){
                return [i, nums.indexOf(temp, i+1)];
            }
        }
    }
}
