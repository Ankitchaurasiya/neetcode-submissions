class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p,s) => [p, speed[s]]);
        pair.sort((a,b) => b[0] - a[0]);
        let stack = [];
        for(let [p,s] of pair){

            let reach = (target -p)/s;
            stack.push(reach);

            if(stack.length >= 2 && 
            stack[stack.length -1] <= stack[stack.length -2]){
                stack.pop();
            }
        }
        return stack.length;
    }
}
