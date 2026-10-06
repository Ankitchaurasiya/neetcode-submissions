class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

// wuith queue
let count = {};
    for(let ele of nums){
        count[ele] = (count[ele] || 0) +1;
    }

    let heap = new MinPriorityQueue(x => x[1]);
    for(let [ele, cnt] of Object.entries(count)){
         heap.enqueue([ele, cnt]);
         if(heap.size() > k) heap.dequeue();
    }
    let res =[];
    while(heap.size()){
        let [ele, cnt] = heap.dequeue();
        res.push(ele)
    }

    return res;

    }
}
