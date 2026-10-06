class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     let mp = new Map();
        for(let i = 0; i< nums.length; i++){
            let temp = target - nums[i];
            if(mp.has(temp)){
                return [mp.get(temp), i]
            }
            mp.set(nums[i], i);
        }
        return [];
    }
}
