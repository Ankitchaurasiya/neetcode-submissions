class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //loop -> sum += min(leftmax, rightmax) - hi
        let n = height.length;
        let ans = 0;
        let leftmax = new Array(n).fill(0);
        let rightmax = new Array(n).fill(0);

        leftmax[0] = height[0];
        for(let j=1; j< n; j++){
                leftmax[j] = Math.max(leftmax[j-1], height[j]);
        }
        rightmax[n-1] = height[n-1];
        for(let j=n-2; j >= 0; j--){
                rightmax[j] = Math.max(height[j], rightmax[j+1]);
        }

        for(let i=0; i< n; i++){
            ans +=Math.min(leftmax[i], rightmax[i]) - height[i];
        }
        return ans;
    }
}
