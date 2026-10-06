class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // let mp = new Map();
        // for(let ele of nums){
        //     mp.set(ele, (mp.get(ele) || 0) + 1);
        // }
        // let sortedArr = [...mp.entries()].sort((a,b) => b[1] - a[1]);
        // return sortedArr.slice(0,k).map(val => val[0]);
        let obj = {};
        for(let ele of nums){
            obj[ele] = (obj[ele] || 0 ) + 1;
        }
        let arr = Array.from(Object.entries(obj)).sort((a,b) => b[1]- a[1]).slice(0,k).map(e => e[0]);
        return arr;
    }
}
