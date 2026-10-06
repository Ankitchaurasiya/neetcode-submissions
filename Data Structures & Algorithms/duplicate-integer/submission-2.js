class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    let s = new Set();
    nums.forEach(x => {
        s.add(x)
    });
    if(nums.length == s.size){
        return false
    }
    else {
        return true
    }
    }
    }