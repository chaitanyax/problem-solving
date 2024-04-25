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

## 150. Evaluate Reverse Polish Notation

> You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

> Evaluate the expression. Return an integer that represents the value of the expression.

> Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

> Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

> Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

> Example 3:
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

> Constraints:
1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

```js
    /**
    * @param {string[]} tokens
    * @return {number}
    */
    var evalRPN = function(tokens) {
        let stack = [];
        for(let i = 0; i < tokens.length; i++) {
            if(tokens[i] === '+') {
                stack.push(stack.pop() + stack.pop());
            } else if(tokens[i] === '*') {
                stack.push(stack.pop() * stack.pop());
            } else if(tokens[i] === '-') {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b - a);
            } else if(tokens[i] === '/') {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(Number(tokens[i]));
            }
        }
        return stack[0];
    };
```