// Given an integer array arr[]. You need to find 
// the maximum sum of a subarray.

var arr = [2, 3 - 8, 7, -1, 2, 3]

let tempArr = arr[0]
let res = arr[0]
for (let i = 1; i < arr.length; i++)
{

    tempArr = Math.max(tempArr + arr[i], arr[i])

    res = Math.max(res, tempArr)

}

console.log(res)