// Given an array arr[] containing only 0s, 1s, and 2s. 
// Sort the array in ascending order.

var arr = [0, 1, 2, 0, 1, 2]

// let c1 = 0; c2 = 0; c3 = 3

// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] === 0)
//     {
//         c1++
//     }
//     if (arr[i] === 1)
//     {
//         c2++
//     } else
//     {
//         c3++
//     }
// }

// let idx = 0
// for (let i = 0; i < c1; i++)
// {
//     arr[idx++] = 0

// }
// for (let i = 0; i < c2; i++)
// {
//     arr[idx++] = 1

// }
// for (let i = 0; i < c3; i++)
// {
//     arr[idx++] = 2

// }


let low = 0; high = arr.length - 1, mid = 0;

while (mid <= high)
{
    if (arr[mid] === 0)
    {
        [arr[low], arr[mid]] = [arr[mid], arr[low]]
        low++;
        mid++;
    }
    else if (arr[mid] === 1)
    {
        mid++;
    }
    else
    {
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
    }
}

console.log(arr.join(' '));


// let a = true, b = true, c = false

// console.log(a || b && c)