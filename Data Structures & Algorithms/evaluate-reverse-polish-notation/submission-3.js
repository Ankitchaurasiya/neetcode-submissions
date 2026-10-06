class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        /* 
        Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/
    let arr = [];
    
    for(let i=0; i< tokens.length; i++){


        if(tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/'){
            let b = arr.pop();
            let a = arr.pop();
            a = a - '0';
            b = b - '0';
            let val;
            if(tokens[i] === '+'){(val = a+b)}
            else if(tokens[i] === '-')(val = a-b);
            else if(tokens[i] === '*')(val = a*b);
            else if(tokens[i] === '/')(val = Math.trunc(a/b));
        arr.push(val);
        console.log(val);
        continue;
        }
        arr.push(tokens[i]);

    }
    return arr[0];
    }
}
