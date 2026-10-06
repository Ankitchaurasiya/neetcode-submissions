class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let n = heights.length;
        let l = 0;
        let r = n -1;
        let prd =0;

        while(l < r){
            const area = Math.min(heights[l], heights[r]) * (r-l);
            prd = Math.max(prd, area);

            if(heights[l] <= heights[r]) {
                l++;
            }
            else {
                r--
            }
        }
    return prd;
    }
}
