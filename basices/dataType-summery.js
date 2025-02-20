// Primitive

// 7 types 

/*

String
Number
Boolean
null
undefined
symbol
BigInt



*/

// Reference Type (Non primitive)

// Array, Objects Functions

const score = 100;
const scoreValue = 100.23
const loggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log( id === anotherId);

const bigNumber = 2545454455445454555n


const employeeName = ["Vinod ", "Kumar", "Kunal"];


let obj ={
   
    name: "vinod",

    email: "kumar@gmail.com",

    city: "delhi"

}

const myfunction = function(){
    console.log("Hello world");  
}

// console.log(typeof bigNumber);


// Memory 

/*

Stack Memory (Primitive)
Stores: Primitive values (e.g., string, number, boolean, null, undefined, symbol, bigint) and function calls.

whenver we use stack create varable get copy file
*/

let x = 10;
let y = x; // y gets a copy of x, both exist independently
y = 20; 
// console.log(x); // 10 (original value remains unchanged)
// console.log(y);


let oldCompanyName = "Thre Zero Brand Tech";

let anOtherCompanyName = oldCompanyName
anOtherCompanyName = "Matrix Web"

console.log(`Old Company Name: ${oldCompanyName}`);
console.log(`New COmpany Name": ${anOtherCompanyName}`);




/*
Heap (Non - Primitive)
Stores: Objects, arrays, functions, and closures.

wherver we create varaible get reference orignal value
*/

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 gets a reference to obj1 in the heap
obj2.name = "Bob";
// console.log(obj1.name); // "Bob" (Both obj1 and obj2 point to the same object)

let userOne = {
    name: "vinod",
    email: "kumar@gmail.com"
}
let userTwo = userOne
userTwo.name = "muskan"

console.log(userOne.name);
console.log(userTwo.name);
