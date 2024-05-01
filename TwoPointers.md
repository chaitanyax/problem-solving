
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

## 11. Container With Most Water

> You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

> Find two lines that together with the x-axis form a container, such that the container contains the most water.

> Return the maximum amount of water a container can store.

> Notice that you may not slant the container.

 

> Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

> Example 2:
Input: height = [1,1]
Output: 1
 

> Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(right > left) {
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        maxArea = Math.max(maxArea, h * w);
        if(height[right] > height[left]) {
            left++
        } else {
            right--;
        }
    }
    return maxArea;
};
```