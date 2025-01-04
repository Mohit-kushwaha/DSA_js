// Given an array arr of integers, find all the elements that occur more than once in the array.
//  If no element repeats, return an empty array.

var arr = [2, 3, 1, 2, 3]

var dupArr = []
let freqMap = new Map()

for (const num of arr)
{
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
}

for (let [key, value] of freqMap)
{
    if (value > 1)
    {
        dupArr.push(key)
    }
}

console.log(dupArr)