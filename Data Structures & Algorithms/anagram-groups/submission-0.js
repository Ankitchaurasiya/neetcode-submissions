class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = [];
        let s = new Set();

        for(let i=0; i< strs.length; i++){
            if(s.has(i)) continue;

            let arr = [];
            let a = strs[i].split('').sort().join('');
            arr.push(strs[i]);
            s.add(i);
            for(let j= i+1; j< strs.length; j++){
                let b = strs[j].split('').sort().join('');
                if(a == b){
                    arr.push(strs[j]);
                    s.add(j);
                }
            }
            output.push(arr);
        }
        return output; 
    }
}
