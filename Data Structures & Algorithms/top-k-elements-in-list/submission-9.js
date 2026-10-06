class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = new Map();
        for(let ele of nums){
            mp.set(ele, (mp.get(ele) || 0 )+1);
        }
        let sortedArr = [...mp.entries()].sort((a,b)=> b[1]- a[1]).slice(0,k);
        console.log(sortedArr);
         let mp2 = sortedArr.map(([key, val]) => key);
        return mp2;
    }
}
