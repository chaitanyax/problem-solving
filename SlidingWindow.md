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
