class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let m = new Map();
        for(let i=0; i<numbers.length; i++){
            let temp = target - numbers[i];
            console.log(temp, i);
            
            if(m.has(temp)){
                return [m.get(temp)+1, i+1]
            }
            m.set(numbers[i], i);
        }
        return []
    }
}
