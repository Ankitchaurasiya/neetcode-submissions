class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l =1;
        piles.sort((a,b) => a-b);
        let r = piles[piles.length - 1];
        while(l <= r){
           let mid = Math.floor((l+r) / 2);
           let sum = 0;
           for(let ele of piles){
            sum += Math.ceil(ele/mid);
           }
           if(sum > h){
            l = mid+1;
           } else {
            r = mid-1;
           }
        }
        return l;
    }
}
