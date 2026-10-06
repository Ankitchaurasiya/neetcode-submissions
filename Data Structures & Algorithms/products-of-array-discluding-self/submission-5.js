class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let n = nums.length;
        let suffix =1;
        
        let ans = new Array(n).fill(1);

        for(let i=0; i<nums.length; i++){
            ans[i] = prefix;
            prefix = prefix * nums[i];
        }
        console.log(ans);

        for(let i = n-1; i>= 0; i--){
            ans[i] *= suffix;
            suffix *= nums[i];
        }
        console.log(ans);
        return ans;
    }
}
