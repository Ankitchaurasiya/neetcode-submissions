class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0; i< nums.length; i++){
            let diff = target - nums[i];
            if(nums.includes(diff, i+1)){
                return [i, nums.indexOf(diff, i+1)]
            }
        }
    }
}
