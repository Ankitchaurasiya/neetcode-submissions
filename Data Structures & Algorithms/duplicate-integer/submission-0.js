class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i=0; i< nums.length; i++){
            let x = nums[i]
            for(let j = i; j <= nums.length ; j++){
            if( x == nums[j+1]){
                return true;
            }
            }
        }
        return false;
    }
}
