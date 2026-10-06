class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mp = new Map();
        for(let str of strs){
            let k = str.split('').sort().join('');
            console.log(k)
            if(mp.has(k)){
                mp.get(k).push(str);
            }
            else {
                mp.set(k, [str])
            }
        }
        console.log(mp.keys())
        return [...mp.values()]
    }
}
