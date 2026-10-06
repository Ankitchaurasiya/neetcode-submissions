class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let obj = {
            "]":"[",
            "}":"{",
            ")":"("
        };
        let stack = [];
        
    for(let ele of s){
        if(ele == '[' || ele == '{' || ele == '('){
            stack.push(ele);
        } else if(ele == '}' || ele == ')' || ele == ']'){
            let poped = stack.pop();
            if(poped !== obj[ele]){
                return false;
            }
        }   
    }
    if(stack.length > 0) return false;
    return true;
    }
}
