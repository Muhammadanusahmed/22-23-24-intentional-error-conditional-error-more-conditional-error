// Question22: intentional error

let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
console.log(friends[2]);

// Question23: conditional error

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

// Question24: more conditional error

//Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical test");
console.log(10>2); //true
console.log(10<2); //false

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// test whether an item is in a array  // use include
let fruit :string[] = ["apple", "banana", "cherry"]
console.log("is 'apple' in fruit?"); 
console.log(fruit.includes("apple")); // true

// test whether an item is in a array  // use include
console.log("is 'mango' not in fruit?");
console.log(!fruit.includes("mango")); // true  
// because we are use  ! not equal sign that's a reason it's give me true 

