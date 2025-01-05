let array = [0, 0, 0];

function getPairs(arr)
{
    let interval = [];
    arr.sort((a, b) => a - b); // Ensure sorted for binary search
    let left = 0, right = arr.length - 1;

    while (left < right)
    {
        let sum = arr[left] + arr[right];

        if (sum === 0)
        {
            interval.push([arr[left], arr[right]]);
            // Move both pointers to avoid duplicates
            while (left < right && arr[left] === arr[left + 1]) left++;
            while (left < right && arr[right] === arr[right - 1]) right--;
            left++;
            right--;
        } else if (sum < 0)
        {
            left++;
        } else
        {
            right--;
        }
    }

    return interval;
}

function binarySearch(arr, left, right, target)
{

    while (left <= right)
    {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target)
        {
            return arr[mid];
        } else if (arr[mid] < target)
        {
            left = mid + 1;
        } else
        {
            right = mid - 1;
        }
    }
    return false

}

console.log(getPairs(array))