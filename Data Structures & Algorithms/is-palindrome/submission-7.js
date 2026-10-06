class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let n = s.length;
        let l =0;
        let r = n-1;
        function checkStr(str){
            if((/[a-zA-Z0-9]/g).test(str)){
                return true;
            }
            return false;
        }
        while(l <= r){
            while(l<r && !checkStr(s[l])){
                l++;
            }
            while(l<r && !checkStr(s[r])){
                r--;
            }
            if(s[l].toLowerCase() != s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;

        }
        return true;
    }
}
