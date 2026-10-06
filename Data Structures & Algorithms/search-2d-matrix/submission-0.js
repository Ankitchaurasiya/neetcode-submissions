class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n = matrix.length;
        let m = matrix[0].length;

        for(let i = 0; i< n; i++ ){
            for(let j = 0; j<m ; j++){
                if(target == matrix[i][j]) return true;
            }
        }
            return false;
    }

}
