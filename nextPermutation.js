// Given an array of integers arr[] representing a permutation, implement the next permutation
//  that rearranges the numbers into the lexicographically next greater permutation.
//  If no such permutation exists, rearrange the numbers into the lowest possible
//  order (i.e., sorted in ascending order). 

var arr = [1, 2, 3, 6, 5, 4]

const size = arr.length
let pivot = -1;
for (let i = size - 1; i >= 0; i--)
{
    if (arr[i] < arr[i + 1])
    {
        pivot = i
        break;
    }
}

if (pivot === -1)
{
    arr.reverse()
    return
}

for (let i = size - 1; i > pivot; i--)
{
    if (arr[i] > arr[pivot])
    {
        [arr[i], arr[pivot]] = [arr[pivot], arr[i]]
        break
    }

}

let left = pivot + 1
let right = size - 1
while (left < right)
{
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--;
}
console.log(arr)