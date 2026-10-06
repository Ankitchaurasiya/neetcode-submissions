class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map();
        for(let i=0; i<nums.length; i++){
            let val = target - nums[i];
            if(mp.has(nums[i])){
                return [mp.get(nums[i]), i];
            } else {
                mp.set(val, i);
            }
        }
        return [];
    }
}
