class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i =0; i< nums.length; i++){
            let val = target - nums[i]
            if(nums.includes(val, i+1)){
                return [i, nums.indexOf(val, i+1)];
            }
        }
        return 
    }
}
