class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l =0;
        let n = prices.length;
         let r=1;
        let max = 0;
        while( l< n && r < n){
            if(prices[r] > prices[l]){
                let profit = prices[r] - prices[l];
                max = Math.max(max, profit);
            } else {
                l = r;
            }
            r++;
        }
        return max;
    }
}
