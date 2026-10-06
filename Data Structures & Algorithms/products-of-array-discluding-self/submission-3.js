class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let suffix = 1;
        let arr = [];
        let n = nums.length;
        for(let i=0; i< n; i++){
            arr[i] = prefix;
            prefix *=nums[i];
        }
        for(let i = n-1; i>=0; i--){
            arr[i] *= suffix;
            suffix *= nums[i]
        }
        return arr;
    }
}
