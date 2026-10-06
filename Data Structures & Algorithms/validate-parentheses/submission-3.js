class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        let obj = {
            ']':'[',
            '}':'{',
            ')':'('
        };
        for(let sub of s){
            console.log(sub);
            if(sub == "[" || sub == "{" || sub == "("){
                arr.push(sub);
            }
            else if(sub == "]" || sub == "}" || sub == ")"){
                if(obj[sub] == arr[arr.length - 1]){
                arr.pop();
                }
                else {
                    return false;
                }
            }
        }
    return arr.length === 0;
    }
}
