//Given an array arr[] of non-negative integers. Each array element represents the maximum length
//  of the jumps that can be made forward from that element. This means if arr[i] = x, 
// then we can jump any distance y such that y ≤ x. Find the minimum number of jumps to 
// reach the end of the array starting from the first element. If an element is 0, then 
// you cannot move through that element.

//Note:  Return -1 if you can't reach the end of the array.


function minJumps(arr)
{

    let n = arr.length;
    if (n <= 1) return 0;
    if (arr[0] == 0) return -1;

    let maxReach = arr[0];
    let steps = arr[0];
    let jumps = 1;
    for (let i = 1; i < n; i++)
    {

        if (i == n - 1) return jumps;
        maxReach = Math.max(maxReach, i + arr[i]);

        steps--;
        if (steps == 0)
        {
            jumps++;


            if (i >= maxReach) return -1;


            steps = maxReach - i;
        }

    }
    return -1
}
let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log(minJumps(arr)); // Output: 3