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

## 22. Generate Parentheses

> Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

> Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

> Example 2:
Input: n = 1
Output: ["()"]
 
> Constraints:
1 <= n <= 8

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    stack = [];
    result = [];
    
    function backTrack(open, close) {
        if(open === n && close === n) {
            result.push(stack.join(''));
            return;
        }
        if(open < n) {
            stack.push('(');
            backTrack(open + 1, close);
            stack.pop();
        }
        if(open > close) {
            stack.push(')');
            backTrack(open, close + 1);
            stack.pop();
        }
    }
    backTrack(0, 0);
    return result;
};
```

## 739. Daily Temperatures
> Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

> Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

> Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

> Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
 
> Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[i] > stack[stack.length - 1][0]) {
            let [stackTemp, stackIndex] = stack.pop();
            res[stackIndex] = i - stackIndex;
            
        }
        stack.push([temperatures[i], i]);
    }
    return res;
};
```

## 853. Car Fleet
> There are n cars going to the same destination along a one-lane road. The destination is target miles away.

> You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

> A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

> A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

> If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

> Return the number of car fleets that will arrive at the destination.

> Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
Note that no other cars meet these fleets before the destination, so the answer is 3.

> Example 2:
Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation: There is only one car, hence there is only one fleet.

> Example 3:
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
Explanation:
The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
 

> Constraints:
n == position.length == speed.length
1 <= n <= 105
0 < target <= 106
0 <= position[i] < target
All the values of position are unique.
0 < speed[i] <= 106

```js
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let psList = [];
    let stack = [];
    for(let i = 0; i < position.length; i++) {
        psList.push([position[i], speed[i]]);
    }
    psList.sort((a, b) => b[0] - a[0]);
    for(let i = 0; i < psList.length; i++) {
        stack.push((target - psList[i][0]) / psList[i][1]);
        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }
    return stack.length;
};
```
## 84. Largest Rectangle in Histogram

> Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

> Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

> Example 2:
Input: heights = [2,4]
Output: 4
 
> Constraints:
1 <= heights.length <= 105
0 <= heights[i] <= 104
### Wrong Answer
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        let start = i;
        while(stack && stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            let [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = i;
        }
        stack.push([start, heights[i]]);
    }
    for(let j = 0; j < stack.length; j++) {
        maxArea = Math.max(maxArea, stack[j][1] * (heights.length - stack[j][0]));
    }
    return maxArea;
};
```
