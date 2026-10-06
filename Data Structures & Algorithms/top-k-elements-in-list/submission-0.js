class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = nums.reduce((map, item) => 
        map.set(item, (map.get(item) || 0)+1), new Map());

        let output = [...countMap.entries()].sort((a,b) => b[1]- a[1]).slice(0,k).map(itr => itr[0]);

        return output;

    }
}
