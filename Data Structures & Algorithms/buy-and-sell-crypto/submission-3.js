class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l =0;
        let n = prices.length;
        // let r=1;
        let max = 0;
        while( l< n ){
            let r = l+1;
            while(r < n){
            let profit = prices[r] - prices[l];
            max = Math.max(max, profit);
                r++;
            }
            l++;
        }
        return max;
    }
}
