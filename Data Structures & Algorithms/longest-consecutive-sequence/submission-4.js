class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let arr = [];
        let maxLen = 0;
        for(let ele of set){

            if(!set.has(ele-1)){
                arr.push(ele);
                while(set.has(++ele)){
                    arr.push(ele);
                }
            }
            maxLen = Math.max(maxLen, arr.length);
            arr = [];
        }
        return maxLen;
    }
}
