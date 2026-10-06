class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n = matrix.length;
        let m = matrix[0].length;
        let l=0;
        let r=m*n-1;
        while(l<=r){
            let mid= Math.floor((l+r)/2);
            let row = Math.floor(mid/m);
            let col = Math.floor(mid%m);
            if(target == matrix[row][col]) return true;
            if(target > matrix[row][col]){
                l = mid+1;
            }
            else{
                r = mid-1;
            }
        }
        return false;


    }

}
