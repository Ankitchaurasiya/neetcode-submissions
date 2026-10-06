class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];
        nums.sort((a,b) => (a-b));
        console.log(nums);
        for(let i = 0; i< nums.length; i++){
            for(let j = i+1; j< nums.length; j++){
                 for(let k = j+1; k< nums.length; k++){
                    if(nums[i] + nums[j] + nums[k] == 0){
                        output.push([nums[i], nums[j], nums[k]])
                    }
                 }
            }
        }
        
    return Array.from(new Set(output.map(JSON.stringify))).map(JSON.parse)
    }
}
