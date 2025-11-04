// some

// const numbers = [1, 2, 3, 7, 5];
// const hasEvenNumber = numbers.some(number => number % 4 ===0);
// console.log(hasEvenNumber)


// //*check user role using some
// const userAdminRole = ['user', 'creator','admin'];
// const featureAccessRole = ['admin', 'moderator'];

// const hasAdmin = userAdminRole.some(role => featureAccessRole.includes(role));
// console.log(hasAdmin);


// Array.from

const range = (start, stop, step) => Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * 2
);

console.log(range(1, 11, 2));