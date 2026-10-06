class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let input = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        let output = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        let output1 = output.split('').reverse().join('')
        console.log(input);
        console.log(output1);
        return input == output1;
    }
}
