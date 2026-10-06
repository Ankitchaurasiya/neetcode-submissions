class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let ans = [];
        let max = 0;
        for(let i=0; i< nums.length; i++){
            let ele = nums[i];
            if(!set.has(ele-1) && ans.length == 0){
                ans.push(ele);
                while(set.has(ele+1)){
                    ans.push(ele+1);
                    ele +=1;
                }
            }
            max = Math.max(max, ans.length);
            ans= [];
        }
        return max;
    }
}
