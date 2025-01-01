//Given an array arr[] and an integer k where k is smaller than the size
// of the array, the task is to find the kth smallest element in the given array.

var arr = [7, 10, 4, 3, 20, 15]

var newArr = []
var min = Infinity
let k = 1
if (k > 0 && k < arr.length)
{

    for (let i = 0; i < arr.length; i++)
    {
        var swap = false;
        for (let j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
    }
    console.log(arr[k - 1]) //smallest
    console.log(arr[arr.length - k - 1])
}
else
{
    return 0;
}