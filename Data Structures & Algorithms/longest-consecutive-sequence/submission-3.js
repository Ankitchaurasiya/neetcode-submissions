class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest =0;
        let s = new Set(nums);

        for(let ele of nums){
            //if ele-1 is not in set then we can start from there
            if(!s.has(ele-1)){
                
                let length =1;
                while(s.has(ele+1)){
                    length++;
                    ele++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest
    }
}
