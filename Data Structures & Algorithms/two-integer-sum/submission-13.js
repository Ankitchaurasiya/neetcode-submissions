class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map();
        for(let i =0; i< nums.length; i++){
            let val = target - nums[i]
            if(mp.has(val)){
                return [mp.get(val), i]
            }
            mp.set(nums[i], i)
        }
        return []
    }
}
