class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = new Map();
        for(let num of nums){
            if(!mp.has(num)){
                mp.set(num, 1)
            }
            else {
                mp.set(num, mp.get(num) + 1);
                }
        }
        let sorted = [...mp.entries()].sort((a,b) => b[1]-a[1]);
        let res = [];
        for(let i=0; i< k; i++){
            
            res.push(sorted[i][0])
        }
        console.log(sorted);
        console.log(res);
        return res



























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
