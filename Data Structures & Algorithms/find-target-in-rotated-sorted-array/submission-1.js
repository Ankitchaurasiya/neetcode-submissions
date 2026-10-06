class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let res = nums.indexOf(target) != null ? nums.indexOf(target) : -1
        return res; 
    }
}
