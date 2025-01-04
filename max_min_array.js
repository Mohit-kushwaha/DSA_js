
var arr = [45, -75]
function sum(arr)
{

    let maxCount = 0, minCount = 0
    if (arr.length <= 2)
    {
        return arr.length
    }
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > arr[maxCount])
        {
            maxCount = i

        }
        if (arr[i] < arr[minCount])
        {
            minCount = i

        }
    }

    if (minCount > maxCount) [minCount, maxCount] = [maxCount, minCount];

    const leftRemove = maxCount + 1;
    const RightRemove = arr.length - minCount;
    const bothSide = (arr.length - maxCount) + (minCount + 1)
    return Math.min(leftRemove, RightRemove, bothSide)
}

console.log(sum(arr))
console.log(sum(
    [-1, -53, 93, -42, 37, 94, 97, 82, 46, 42, -99, 56, -76, -66, -67, -13, 10, 66, 85, -28]
))

console.log(sum([2, 10, 7, 5, 4, 1, 8, 6]
))
console.log(sum([20, -40, -6, -79, -85, -95]))

console.log(sum([-14, 61, 29, -18, 59, 13, -67, -16, 55, -57, 7, 74]))