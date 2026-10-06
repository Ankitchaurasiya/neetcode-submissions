class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

    // let arr = [];
    
    // for(let i=0; i< tokens.length; i++){


    //     if(tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/'){
    //         let b = arr.pop();
    //         let a = arr.pop();
    //         a = a - '0';
    //         b = b - '0';
    //         let val;
    //         if(tokens[i] === '+'){(val = a+b)}
    //         else if(tokens[i] === '-')(val = a-b);
    //         else if(tokens[i] === '*')(val = a*b);
    //         else if(tokens[i] === '/')(val = Math.trunc(a/b));
    //     arr.push(val);
    //     console.log(val);
    //     continue;
    //     }
    //     arr.push(tokens[i]);

    // }
    // return arr[0];

    let arr = [];
    for(let i=0; i < tokens.length; i++){
        if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/'){
            let a = Number(arr.pop());
            let b = Number(arr.pop());
            if(tokens[i] == '+'){
                arr.push(a+b);
            } else if(tokens[i] == '-'){
                arr.push(b-a);
            } else if(tokens[i] == '*'){
                arr.push(a*b);
            }
            else if(tokens[i] == '/'){
                arr.push(Math.trunc(b/a));
            }
        } else {
            arr.push(tokens[i]);
        }
    }
    return arr[0];
    }
}
