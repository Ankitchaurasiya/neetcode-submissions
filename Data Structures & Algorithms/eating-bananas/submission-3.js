class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b) => a-b);
        let l=1;
        let r = piles[piles.length-1];
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            let sum =0;
            for(let i=0; i<piles.length; i++){
                sum += Math.ceil(piles[i]/mid);
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
