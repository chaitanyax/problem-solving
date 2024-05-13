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

## 875. Koko Eating Bananas
> Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

> Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

> Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.

> Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

> Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

> Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
 
> Constraints:
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109

```js
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 0;
    let r = Math.max(...piles);
    let res = r;

    while(l <= r) {
        let m = (r + l) >> 1;
        let hours = 0;
        for(let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i]/m);
        }
        if(hours > h) {
            l = m + 1;
        } else {
            res = m;
            r = m - 1;
        }
    }
    return res;
};
```

## 153. Find Minimum in Rotated Sorted Array

> Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

> [4,5,6,7,0,1,2] if it was rotated 4 times.
> [0,1,2,4,5,6,7] if it was rotated 7 times.
> Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

> Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

> Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

> Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 
> Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0; 
    let r = nums.length - 1;
    let min = Infinity;

    while(l <= r) {
        if(nums[l] < nums[r]) {
            min = Math.min(min, nums[l]);
            break;
        }
        let m = (l + r) >> 1;
        min = Math.min(min, nums[m]);
        if(nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return min;
};
```

## 33. Search in Rotated Sorted Array

> There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

> Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

> You must write an algorithm with O(log n) runtime complexity.

> Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

> Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

> Example 3:
Input: nums = [1], target = 0
Output: -1

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1;
    let result = 0;

    while(l <= r) {
        let m = (l + r) >> 1;
        if(nums[m] == target) {
            return m;
        }
        if(nums[l] <= nums[m]) {
            if(target > nums[m] || target < nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        } else {
            if(target < nums[m] || target > nums[r]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
    return -1;
};
```
## 981. Time Based Key-Value Store
> Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

> Implement the TimeMap class:
TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 

> Example 1:
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

> Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
 

> Constraints:
1 <= key.length, value.length <= 100
key and value consist of lowercase English letters and digits.
1 <= timestamp <= 107
All the timestamps timestamp of set are strictly increasing.
At most 2 * 105 calls will be made to set and get.
```js
class TimeMap {
    constructor() {
        this.store = {};
    }
    set(key, value, timestamp) {
        if(!this.store.hasOwnProperty(key)) {
            this.store[key] = [[value, timestamp]];
        } else {
            this.store[key].push([value, timestamp]);
        }
    }

    get(key, timestamp) {
        let values = this.store[key];
        if(!values) {
            return "";
        }
        let res = "";
        let l = 0;
        let r = values.length - 1;
        while(l <= r) {
            let m = (l + r) >> 1;
            if(values[m][1] > timestamp) {
                r = m - 1;
            } else if(values[m][1] <= timestamp) {
                res = values[m][0];
                l = m + 1;
            }
        }
        return res;
    }
 }
```
