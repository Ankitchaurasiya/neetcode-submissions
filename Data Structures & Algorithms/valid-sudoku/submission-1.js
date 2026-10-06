class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    let arr = [];
    let coll = [];
    for(let i=0; i<9; i++){
        arr = [];
        coll = [];
        for(let j=0; j< 9; j++){
            if(board[i][j] != "."){
                if(!arr.includes(board[i][j])){
                    arr.push(board[i][j]);
                } else {
                    return false;
                }
            }

            if(board[j][i] != "."){
                if(!coll.includes(board[j][i])){
                    coll.push(board[j][i]);
                } else {
                    return false;
                }
            }
        }
        console.log(arr);
        console.log(coll);
    }


        // 3 X 3 box validation
    for(let x = 0; x<9; x +=3){
        for(let y=0; y<9; y +=3){

    arr = [];
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){

                if(board[i+x][j+y] != "."){
                    if(!arr.includes(board[i+x][j+y])){
                        arr.push(board[i+x][j+y]);
                    } else {
                        return false;
                    }
                }
            }
        }
        }
    }
        return true;
    }
}
