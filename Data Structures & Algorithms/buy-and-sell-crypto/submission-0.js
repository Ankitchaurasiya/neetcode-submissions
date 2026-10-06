class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        for(let i=0; i< prices.length; i++){
            let price1 = prices[i];
            for(let j =i; j < prices.length; j++){
                let price2 = prices[j];
                res = Math.max(res, price2 - price1);
            }
        }
    return res;
    }
}
