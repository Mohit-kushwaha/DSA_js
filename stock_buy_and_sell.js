//Given an array are denoting the cost of stock on each day, the task 
// is to find the maximum total profit if we can buy and sell the stocks any number of times.

var arr = [100, 180, 260, 310, 40, 535, 695]

let i = 0
let n = arr.length
let low = 0;
let high = 0
let buy = 0
while (i < n - 1)
{

    while (i < n - 1 && arr[i] >= arr[i + 1])
    {
        i++
    }
    low = arr[i]
    while (i < n - 1 && arr[i] <= arr[i + 1])
    {
        i++
    }
    high = arr[i]

    buy += high - low
}


console.log(buy)

