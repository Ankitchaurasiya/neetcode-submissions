class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let answer = new Array(n).fill(0);
        let stack = [];

        for(let l = 0; l<n; l++){
            
         while(stack.length && temperatures[l] > temperatures[stack[stack.length-1]]){
            let val = stack.pop();
            answer[val] = l-val;
         }
         stack.push(l);
        }
        console.log(answer);
    return answer;
    }
}
