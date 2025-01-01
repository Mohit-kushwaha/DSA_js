var a = [1, 2, 3, 4, 5], b = [1, 2, 3]
var union = [];
var seen = {};

// Add elements from the first array to the union
for (let i = 0; i < a.length; i++)
{
    if (!seen[a[i]])
    {
        union.push(a[i]);
        seen[a[i]] = true;
    }
}

// Add elements from the second array to the union
for (let j = 0; j < b.length; j++)
{
    if (!seen[b[j]])
    {
        union.push(b[j]);
        seen[b[j]] = true;
    }
}

console.log(union.length)

