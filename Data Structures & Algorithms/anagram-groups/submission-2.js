class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map();
        for(let ele of strs){
            let key = ele.split('').sort().join('');
            if(!map.has(key)){
                map.set(key, []);
               
            }
            map.get(key).push(ele);    
        }
        return Array.from(map.values());
    }
}
