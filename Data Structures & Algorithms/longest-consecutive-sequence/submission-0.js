class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        for(let ele of nums){
            let start = ele;
            let length = 1;
            while(nums.includes(start+1)){
                start++;
                length++;
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}
