## 20. Valid Parentheses

> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

> An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

> Example 1:
Input: s = "()"
Output: true

> Example 2:
Input: s = "()[]{}"
Output: true

> Example 3:
Input: s = "(]"
Output: false
 

> Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let stack = [];
    let close = Object.keys(brackets);
    for(let i = 0; i < s.length; i++) {
        if(close.indexOf(s[i]) === -1) {
            stack.push(s[i]);
        } else {
            if(stack.length && stack[stack.length - 1] === brackets[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if(stack.length === 0) {
        return true
    }
    return false;
};
```