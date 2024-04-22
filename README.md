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

## 1. Two Sum

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
> You can return the answer in any order.

> Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

> Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

> Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
```

## 49. Group Anagrams
> Given an array of strings strs, group the anagrams together. You can return the answer in any order.
> An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

> Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

> Example 2:
Input: strs = [""]
Output: [[""]]

> Example 3:
Input: strs = ["a"]
Output: [["a"]]

> Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach((value) => {
        let hashValue = buildHashForWord(value);
        let values = map.get(hashValue) || [];
        values.push(value);
        map.set(hashValue, values);
    });
    return [...map.values()];
};

function buildHashForWord(word) {
    let alpb = new Array(26).fill(0);
    for(let i = 0; i < word.length; i++) {
        alpb[getCode(word[i])]++;
    }
    return alpb.toString();
}
function getCode(char) { 
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}
```

## 347. Top K Frequent Elements

> Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

> Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

> Example 2:
Input: nums = [1], k = 1
Output: [1]

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    let bucketList = [];
    for(let i = 0; i < nums.length; i++) {
        if(map.hasOwnProperty(nums[i])) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    for(let key in map) {
        bucketList.push([map[key], key]);
    }
    bucketList.sort((a, b) => b[0] - a[0]);
    let temp = [];
    for(let l = 0; l < k; l++) {
        temp.push(bucketList[l][1]);
    }

    return temp;
};
```
## Encode and Decode Strings
> Encode and decode the following
> Input ['lint', 'code', 'love', 'you']
> Output ['lint', 'code', 'love', 'you']

```js
function encode(str) {
    let encodeString = '';
    for(let i = 0; i < str.length; i++) {
        encodeString = `${encodeString}${str[i].length}#${str[i]}`;
    }
    return encodeString;
}
let input = ['lint', 'code', 'love', 'you'];
let encoded = encode(input);

function decode(str) {
    let decodeOutput = [];
    let i = 0;
    while(i < str.length) {
        let len = Number(str[i]);
        let j = i;
        while(str[j] != '#') {
            j = j + 1;
        }
        let Output = str.substring(j+1, j+1+len);
        decodeOutput.push(Output);
        i = j+1+len;
    }
    return decodeOutput;
}
console.log(decode(encoded));
```
## 238. Product of Array Except Self

> Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

> The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

> You must write an algorithm that runs in O(n) time and without using the division operation.

 

> Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

> Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

> Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

> Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1;
    let postfix = 1;
    let output = [];
    output.push(prefix);

    for(let i = 0; i < nums.length - 1; i++) {
        prefix = nums[i] * prefix;
        output.push(prefix);
    }
    for(let j = nums.length - 1; j >= 0; j--) {
        output[j] = output[j] * postfix;
        postfix = postfix * nums[j];
    }
    return output;
};
```
