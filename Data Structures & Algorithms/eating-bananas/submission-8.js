class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        piles.sort((a,b) => a-b);
        let r = piles[piles.length - 1];
        while(l <= r){
            let mid = Math.floor((l+r)/2);
            let timeTaken = 0;
            for(let p of piles){
                timeTaken += Math.ceil(p/mid);
            }
            if(timeTaken > h){
                l = mid+1;
            } else {
                r = mid-1;
            }
        }
        return l;
    }
}
