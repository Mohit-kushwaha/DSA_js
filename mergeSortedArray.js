//Given two sorted arrays a[] and b[] of size n and m respectively, the task is 
// to merge them in sorted order without using any extra space. Modify a[] so that it
//  contains the first n elements and modify b[] so that it contains the last m elements.

var a = [2, 4, 7, 10]
var b = [2, 3]

let n = a.length, m = b.length;

let i = n - 1, j = 0

while (i >= 0 && j < m)
{
    if (a[i] > b[j])
    {
        [a[i], b[j]] = [b[j], a[i]]
    }
    i--;
    j++

}
a.sort((a, b) => a - b)
b.sort((a, b) => a - b)
console.log(a, b)
