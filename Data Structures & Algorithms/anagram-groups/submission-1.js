class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let output =[];

        let arr = [];
        for(let i=0; i< strs.length; i++){
            arr.push(strs[i].split('').sort().join(''));
        }
        let s = new Set(arr);
        for(let ele of s) {
        let final = [];
            for(let i=0; i<arr.length; i++){
                if(ele == arr[i]){
                    final.push(strs[i]);
                }
            }
            output.push(final);
        }
        return output;
    }
}
