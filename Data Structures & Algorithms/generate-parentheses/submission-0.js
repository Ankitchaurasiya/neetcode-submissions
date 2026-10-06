class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.df('', 0, 0, n, res);
        return res;
    }

    df(s, open, close, n, res){

        if(open < n){
            this.df(s+ '(', open+1, close, n, res)
        }
        if(close < open){
            this.df(s+ ')', open, close+1, n, res)
        }
        if(s.length == 2*n){
            res.push(s);
            return;
        }
    }
}
