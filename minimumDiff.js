// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

var arr = [1, 8, 10, 6, 4, 6, 9, 1]
let k = 7

arr.sort((a, b) => a - b);
let res = arr[arr.length - 1] - arr[0];
for (let i = 1; i < arr.length; i++)
{
    if (arr[i] - k < 0)
    {
        continue
    }

    let minH = Math.min(arr[0] + k, arr[i] - k)
    let maxH = Math.max(arr[i - 1] + k, arr[arr.length - 1] - k)
    res = Math.min(res, maxH - minH)
}

console.log(res)