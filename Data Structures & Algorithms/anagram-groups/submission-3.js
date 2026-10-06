class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mp = new Map();
        for(let str of strs){
            let k = str.split('').sort().join('');
            if(!mp.has(k)){
                mp.set(k, [])
            }
            mp.get(k).push(str)
        }
        console.log(mp.values())
        return [...mp.values()]
    }
}
