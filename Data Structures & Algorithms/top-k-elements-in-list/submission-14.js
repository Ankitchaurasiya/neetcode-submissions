class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    //    let obj = {};
    //     for(let ele of nums){
    //         obj[ele] = (obj[ele] || 0 ) +1;
    //     }
    //     return Object.entries(obj).sort((a,b) => b[1] - a[1]).slice(0, k).map(ele => ele[0])


// with queue
let count = {};
    for(let ele of nums){
        count[ele] = (count[ele] || 0) +1;
    }

    let heap = new MinPriorityQueue(x => x[1]);
    console.log(heap);
    console.log(count);
    for(let ele of Object.entries(count)){
        heap.enqueue(ele);
        if(heap.size() > k){
            heap.dequeue();
        }
    }
    let ans = [];
    while(heap.size()){
        let [ele, cnt] = heap.dequeue();
        ans.push(ele);
    }
    return ans;
    // for(let [ele, cnt] of Object.entries(count)){
    //      heap.enqueue([ele, cnt]);
    //      if(heap.size() > k) heap.dequeue();
    // }
    // let res =[];
    // while(heap.size()){
    //     let [ele, cnt] = heap.dequeue();
    //     res.push(ele)
    // }

    // return res;

    }
}
