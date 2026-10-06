class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let obj = {};
        for(let num of nums){
            obj[num] = (obj[num] || 0) +1;
        }
        let sorted = Object.entries(obj).sort((a,b) => b[1]- a[1]).slice(0,k).map(val => val[0])
        return sorted;









// wuith queue
// let count = {};
//     for(let ele of nums){
//         count[ele] = (count[ele] || 0) +1;
//     }

//     const arr = Object.entries(count).map(([num, freq]) => [
//                 freq, parseInt(num)
//     ])

//     arr.sort((a,b) => b[0] -a[0])
//     console.log(arr);

//     return arr.slice(0,k).map(pair => pair[1])
    // let heap = new MinPriorityQueue(x => x[1]);
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
