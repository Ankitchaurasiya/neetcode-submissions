class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        let n = nums.length;
        let result = [];
        for(let i=0; i<n; i++){
            let j = i+1;
            let k = n-1;
            while(j<k && j < n){
                let sum = nums[i] + nums[j] + nums[k];
                if(sum > 0){
                    k--;
                } else if(sum < 0){
                    j++;
                } else {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                }
            }
        }

    return [...new Set(result.map(JSON.stringify))].map(JSON.parse);
    }
}
