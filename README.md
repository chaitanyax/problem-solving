## 217. Contains Duplicate

> Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

> Example 1:
Input: nums = [1,2,3,1]
Output: true

> Example 2:
Input: nums = [1,2,3,4]
Output: false

>Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

```js 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let jsSet = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(jsSet.has(nums[i])) {
            return true;
        }
        jsSet.add(nums[i]);
    }
    return false;
};
```

## 242. Valid Anagram

> Given two strings s and t, return true if t is an anagram of s, and false otherwise.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

> Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

> Example 2:
Input: s = "rat", t = "car"
Output: false

>Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let sC = {};
    let tC = {};
    for(let i = 0; i < s.length; i++) {
        sC[s[i]] = sC.hasOwnProperty(s[i]) ? sC[s[i]] + 1 : 1;
        tC[t[i]] = tC.hasOwnProperty(t[i]) ? tC[t[i]] + 1 : 1;
    }
    for(let i = 0; i < s.length; i++) {
        if(sC[s[i]] !== tC[s[i]]) {
            return false;
        }
    }
    return true;
};
```
