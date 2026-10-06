class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let n = temperatures.length;
        let answer = new Array(n).fill(0);
        for(let i = 0; i<n ; i++){
            while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]] ){
                let id = stack.pop();
                answer[id] = i - id;
            }
            stack.push(i);
        } 
        return answer;
    }
}
