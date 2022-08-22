// Create some arrays

const numbers = [43, 56, 33, 23, 44, 36,5];

// There is another way to call an array called The Array Constructor
const numbers2 = new Array(43, 56, 33, 23, 44, 36, 5);

// Array can have other values such as strings, boolean, undefined, objects, Date, 

// Getting Array length
 let val;

 val = numbers.length;

 // Check if something is in a array
 val = Array.isArray(numbers2)

 numbers.shift();

 console.log(val);
 console.log(numbers);