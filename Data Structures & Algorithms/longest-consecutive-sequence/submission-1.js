class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest =0;

        
        for(let ele of nums){
            let length =1;
            while(nums.includes(ele + 1)){
               length++;
                ele++;
            }

            longest = Math.max(longest, length);
        }
        return longest;
        
    }
}
