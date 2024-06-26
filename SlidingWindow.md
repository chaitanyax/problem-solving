## 121. Best Time to Buy and Sell Stock

> You are given an array prices where prices[i] is the price of a given stock on the ith day.

> You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

> Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 > Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

> Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

> Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let l = 0;
    let r = 1;
    while(r < prices.length) {
        if(prices[l] < prices[r]) {
            max = Math.max(max, prices[r] - prices[l]);
        } else {
            l = r;
        }
        r += 1;
    }
    return max;
};
```

## 3. Longest Substring Without Repeating Characters
> Given a string s, find the length of the longest 
substring without repeating characters.

> Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

> Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

> Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
> Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let result = 0;
    let set = new Set();

    for(let r = 0; r < s.length; r++) {
        while(set.has(s[r])) {
            set.delete(s[l]);
            l+=1;
        }
        set.add(s[r]);
        result = Math.max(result, r - l + 1);
    }
    return result;
};
```

## 424. Longest Repeating Character Replacement
> You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

> Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

> Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 
> Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let res = 0;
    let count = {};
    let maxf = 0;

    for(let r = 0; r < s.length; r++) {
        if(!count.hasOwnProperty(s[r])) {
            count[s[r]] = 1;
        } else {
            count[s[r]] += 1;
        }
        maxf = Math.max(maxf, count[s[r]]);
        while((r - l + 1 - maxf) > k) {
            count[s[l]] -= 1;
            l = l + 1;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};
```
## Permutation String
> You are given two strings s1 and s2.
Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
Both strings only contain lowercase letters.

> Example 1:
Input: s1 = "abc", s2 = "lecabee"
Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

> Example 2:
Input: s1 = "abc", s2 = "lecaabee"
Output: false

> Constraints:
1 <= s1.length, s2.length <= 1000
```js
```

## 76. Minimum Window Substring
> Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
> The testcases will be generated such that the answer is unique.

> Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

> Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

> Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 
> Constraints:
m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
Follow up: Could you find an algorithm that runs in O(m + n) time?

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t == '') {
        return '';
    }
    let result = [-1, -1];
    let len = Infinity;
    let need = 0;
    let have = 0;
    let left = 0;
    let right = 0;
    let needMap = {};
    let haveMap = {};

    // Prepare Need Window and Have Window init with zeros
    for(let i = 0; i < t.length; i++) {
        if(needMap.hasOwnProperty(t[i])) {
            needMap[t[i]] += 1;
        } else {
            needMap[t[i]] = 1;
        }
        haveMap[t[i]] = 0;
    }
    need = Object.keys(needMap).length;
    for(right = 0; right < s.length; right++) {
        let c = s[right];
        if(haveMap.hasOwnProperty(c)) {
            haveMap[c] += 1;
            if(haveMap[c] == needMap[c]) {
                have += 1;
            }
        }
        while(have == need) {
            let substrlen = (right - left) + 1;
            if(len > substrlen) {
                result = [left, right];
                len = substrlen; 
            }
            let k = s[left];
            if(haveMap.hasOwnProperty(k)) {
                haveMap[k] -= 1;
                if(needMap[k] > haveMap[k]) {
                    have -= 1;
                }
            }
            left += 1;
        }
    }
    return s.substring(result[0], result[1] + 1);
};
```

## 239. Sliding Window Maximum

> You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

 

> Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

> Example 2:
Input: nums = [1], k = 1
Output: [1]
 

> Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
>
> Still working in the solution - I am not able to understand 100% - I am contemplating on the solution
