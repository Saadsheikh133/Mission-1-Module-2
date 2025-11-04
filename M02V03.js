// sorting

const numbers = [3, 30, 39, 50, 4, 83];
const fruits = ['Banana', 'apple', 'Orange', 'date'];

// numbers.sort((a, b) => a - b);  //? ascending order
// numbers.sort((a, b) => b - a);   //?descending order
// fruits.sort((a, b) => a.localeCompare(b));  //*ignore camel case problem



// nested array flat

const arr = [4, 5, 7, 34, 67, [23, 35, 7, [62, 89, 23, [54, 6, 75, [34, 4]]]]];
//* ignore nested array problem

const flatArr = arr.flat(Infinity)

console.log(flatArr)


