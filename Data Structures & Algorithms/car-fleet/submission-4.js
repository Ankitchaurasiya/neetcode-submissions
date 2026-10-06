class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
     carFleet = function(target, position, speed) {
        let pair = position.map((p,s) => [p, speed[s]]);
        pair.sort((a,b) => b[0] - a[0]);
        let stack = [];
        console.log(pair);
        for(let [p,s] of pair){
            let timetaken = (target - p)/s;
            stack.push(timetaken);
            while(stack.length >1 && stack[stack.length -1] <= stack[stack.length -2]){
                stack.pop();
            }
        }

        return stack.length;
    };
}
