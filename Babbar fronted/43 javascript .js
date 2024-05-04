// JS engine is present in browsers, which helps in to run js program - client side
// JS after getting merged with a C++ program called node, so it can now be used outside browser - server side

// js is dynamically typed language
// A dynamically typed language is a programming language where variable types are determined at runtime 
// rather than at compile time. In dynamically typed languages, variables can hold values of any type, 
// and their types can change during the execution of the program.
let x = 10; // x is initially a number
console.log(typeof x); // Output: number

x = "Hello"; // x is now a string
console.log(typeof x); // Output: string

x = { name: "John", age: 30 }; // x is now an object
console.log(typeof x); // Output: object



// Execution Environment:
// Java: Java applications are typically compiled into bytecode, which can run on any platform that has a Java Virtual Machine (JVM). This makes Java platform-independent ("write once, run anywhere").
// JavaScript: JavaScript code is executed by web browsers natively. Additionally, JavaScript can also run on servers (using Node.js) or in other environments (like IoT devices) using runtime environments other than browsers.

// Usage:
// Java: Java is widely used in enterprise environments, especially for building large-scale applications and systems. It is also popular for Android app development.
// JavaScript: JavaScript is primarily used for web development, powering the interactivity of websites and web applications. It is also increasingly used for server-side development (with Node.js) and in various other contexts beyond the web.

--------------------------types of variables
// var: Variables declared with var are function-scoped or globally scoped. They are accessible throughout the entire function in which they are defined, regardless of block scope.
// var: Allows re-declaration of variables within the same scope. 
// let: Variables declared with let are block-scoped. They are only accessible within the block (enclosed by curly braces) in which they are defined.
// let: Does not allow re-declaration of variables within the same scope. 

// const: unchangeable value

---------------------------Primitive data types
// String - sequence of Characters
// Number - integers, floating
// Boolean -
// undefined - undefined represents a variable that has been declared but has not been assigned a value.
//             let x;
//             console.log(x); // Output: undefined
// null -      It is often used to explicitly indicate that a variable does not have a meaningful value.
//             Unlike undefined, null is explicitly assigned to a variable to signify that it has no value.

-----------------Reference types- objects, array, function
objects -  allows you to store collections of key-value pairs
let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "cooking"]
};

Arrays - list of any items (similar or dissimlar)
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: banana

numbers.push(6); // Add element to the end
fruits.pop(); // Remove the last element
fruits.unshift("pear"); // Add element to the beginning
numbers.splice(2, 1); // Remove element at index 2
console.log(numbers.length); // Output: 5


note
// == (Loose Equality):
console.log(1 == '1'); // Output: true (Number 1 is coerced to String '1')
console.log(0 == false); // Output: true (Boolean false is coerced to Number 0)
console.log('' == false); // Output: true (Both are falsy values)
// === (Strict Equality):
The === operator compares both the values and the types of the operands.
console.log(1 === '1'); // Output: false (Number and String are different types)
console.log(0 === false); // Output: false (Number and Boolean are different types)
console.log('' === false); // Output: false (String and Boolean are different types)

// The ternary operator syntax is:
condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // Output: "You are an adult"

NOTE 
Falsy Values:
// The boolean value false itself.
// The number 0 (zero).
// The empty string '' (empty string).
// The special value null.
// The special value undefined.
// The special value NaN (Not a Number).
Truthy Values:
// anything other than Falsy value 
-> always Truthy value will win

























