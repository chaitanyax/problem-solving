## 704. Binary Search
> Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

> You must write an algorithm with O(log n) runtime complexity.

 > Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

> Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 
> Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while(r >= l) {
        let m = (r + l) >> 1;
        let g = nums[m];

        if(g > target) {
            r = m - 1;
        } else if(g < target) {
            l = m + 1;
        } else {
            return m;
        }
    }
    return -1;
};
```

## 74. Search a 2D Matrix
> You are given an m x n integer matrix matrix with the following two properties:
> Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

> You must write a solution in O(log(m * n)) time complexity.

> Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

> Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 
> Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;

    let l = 0;
    let r = ROWS - 1;

    while(r >= l) {
        let m = (r + l) >> 1;
        if(target > matrix[m][COLS - 1]) {
            l = m + 1;
        } else if(target < matrix[m][0]) {
            r = m - 1;
        } else {
            break;
        }
    }
    if(!(r >= l)) {
        return false;
    }
    let rowM =  (r + l) >> 1;
    let left = 0;
    let right = COLS - 1;
    
    while(right >= left) {
        let m = (right + left) >> 1;
        if(target > matrix[rowM][m]) {
            left = m + 1;
        } else if(target < matrix[rowM][m]) {
            right = m - 1;
        } else {
            return true;
        }
    }
    return false;
};
```
