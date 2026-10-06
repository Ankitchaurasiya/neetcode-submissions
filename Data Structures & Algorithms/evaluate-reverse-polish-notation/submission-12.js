class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let val = 0;
        for(let ele of tokens){

            if(ele == "+" || ele == '-' || ele == '*' || ele == '/'){
                let b = stack.pop();
                let a = stack.pop();
                val = 0;
                if(ele == "+") val = a+b;
                if(ele == '-') val = a-b;
                if (ele == '*') val = a*b;
                if(ele == '/') val = Math.trunc(a/b);

                stack.push(val);
                continue;
            } 

            stack.push(Number(ele));
        }
        return stack[0];
    }
}
