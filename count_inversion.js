var arr = [2, 4, 1, 3, 5];

function inversionCount(arr)
{
    return countInver(arr, 0, arr.length - 1)
}

function countInver(arr, l, r)
{
    let res = 0
    if (l < r)
    {
        let m = Math.floor((r + l) / 2)

        res += countInver(arr, l, m)
        res += countInver(arr, m + 1, r)

        res += countAndMerge(arr, l, m, r);
    }
    return res
}

function countAndMerge(arr, l, m, r)
{
    let n1 = m - l + 1, n2 = r - m;

    let left = arr.slice(l, m + 1)
    let right = arr.slice(m + 1, r + 1)

    let res = 0
    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2)
    {
        if (left[i] <= right[j])
        {
            arr[k++] = left[i++]
        } else
        {
            arr[k++] = right[j++]
            res += (n1 - i);
        }
    }
    while (i < n1)
        arr[k++] = left[i++];
    while (j < n2)
        arr[k++] = right[j++];

    return res;
}

console.log(inversionCount(arr));