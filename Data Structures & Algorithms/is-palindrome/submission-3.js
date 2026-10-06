class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let input = s.replace(/[^A-Za-z0-9]/g, '')
        let output = s.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');
        console.log(input);
        console.log(output);
        return input.toLowerCase() == output.toLowerCase()
    }
}
