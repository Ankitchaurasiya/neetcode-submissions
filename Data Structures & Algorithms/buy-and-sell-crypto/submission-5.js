class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let maxP = 0;
        let l=0;
        let r = 1;
        while(r < n){
            if(prices[l] < prices[r]){
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
                r++
            }
            else {
                l++;
                r = l+1;
            }
        }
        return maxP;
        
    }
}
