class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let t = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let r = t.split('').reverse().join('');
        let v = t.split('').join('');
        console.log(r);
        console.log(v)
        return r == v;
    }
}
