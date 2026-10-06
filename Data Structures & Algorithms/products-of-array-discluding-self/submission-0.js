class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

  let prd = 1;
  let zeroCount = 0;
  let res = [];
  
  for(let i = 0; i< nums.length; i++){
    if(nums[i] != 0) prd *=nums[i];
    else zeroCount +=1;
  }
  
  // if zeroCount >1 then return array will be [0,0,0,0]
  for(let i =0; i< nums.length; i++){
    if(zeroCount > 1) res.push(0);
    else if(zeroCount == 1){
      if(nums[i] == 0) res.push(prd);
      else res.push(0);
    }
    else if(zeroCount == 0){
      res.push(prd / nums[i]);
    }
  }
  return res;

    }
}
