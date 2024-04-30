## Code Challenge Problems
This page provides solution to code problems concept wise in Javascript

## 125. Valid Palindrome

> A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

> Given a string s, return true if it is a palindrome, or false otherwise.

 > Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

> Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

> Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

> Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let pointerA = 0;
    let pointerB = s.length - 1;

    while(pointerA < pointerB) {
        while(pointerA < pointerB && !checkAlphanumeric(s[pointerA])) {
            pointerA++;
        }
        while(pointerA < pointerB && !checkAlphanumeric(s[pointerB])) {
            pointerB--;
        }
        if(s[pointerA].toLowerCase() != s[pointerB].toLowerCase()) {
            return false;
        }
        pointerA++;
        pointerB--;
    }
    return true;
};

function checkAlphanumeric(c) {
    let cCode = c.charCodeAt(0);

    let cACode = 'A'.charCodeAt(0);
    let cZCode = 'Z'.charCodeAt(0);
    let caCode = 'a'.charCodeAt(0);
    let czCode = 'z'.charCodeAt(0);
    let c0Code = '0'.charCodeAt(0);
    let c9Code = '9'.charCodeAt(0);
    
    if((cCode >= cACode) && (cCode <= cZCode) ||
        (cCode >= caCode) && (cCode <= czCode) || 
        (cCode >= c0Code) && (cCode <= c9Code)) {
        return true;
    }
    return false;
}
```
