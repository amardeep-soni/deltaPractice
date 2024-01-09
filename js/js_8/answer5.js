let mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

let res = mergeObjects(
    { a: 1, b: 2 },
    { c: 4, d: 5 }
)
console.log(res);