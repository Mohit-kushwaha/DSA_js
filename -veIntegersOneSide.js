// Given an unsorted array arr[ ] having both negative and positive integers.
//  The task is to place all negative elements at the end of the array without
//  changing the order of positive elements and negative elements.


var arr = [1, -1, 3, 2, -7, -5, 11, 6]

var low = 0, high = arr.length - 1;

var positive = [], negative = []

for (let i = 0; i < arr.length - 1; i++)
{
    if (arr[i] < 0)
    {
        negative.push(arr[i])
    } else
    {
        positive.push(arr[i])
    }

}

for (let i = 0; i < arr.length; i++)
{
    if (i < positive.length)
    {
        arr[i] = positive[i];
    } else
    {
        arr[i] = negative[i - positive.length];
    }
}

console.log(arr)


