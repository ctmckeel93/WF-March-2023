/* 
    Primitives\

    String
    Boolean
    Number
    null
    undefined
    BigInt
    void
    Symbol

*/

/*
    Structure

    array
    object
*/

// Arrays

// Syntax -> var array = [];
var numbers = [1,2,3,4,5, 1000, 45, 334, 8127309712903709, 44, 99,2];
var colors = ["Red","Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Cyan"];
// Arrays are zero index -> 0, 1, 2,3
console.log(numbers[2]);

// Objects -> var obj = {key:value,}
var human = {
    name: "corey",
    age: 29,
}

var a = 5;
var b = a;
b++
console.log(b)
console.log(a);

var humanCopy = human;

humanCopy.name = "Kevin";
console.log(humanCopy.name);
console.log(human.name);

var arrayCopy = numbers;
arrayCopy[0] = 10;
console.log(arrayCopy[0]);
console.log(numbers[0]);
// console.log(name); // Reference error: human.name != name

//  Lets make a shallow copy
var shallowArrayCopy = [...numbers];// Creating an obj copy -> {...human}
shallowArrayCopy[0] = 5;
console.log(shallowArrayCopy[0])
console.log(arrayCopy[0]);
console.log(numbers[0]);

// Loops

// For Loop -> for (start, end condition, action after each loop) {some code}
for (var i = 0; i < 10; i++) {
    // console.log(i+1)
    // console.log("Hello");
}

// Looping through a list
// for (var i = 0; i < numbers.length; i++) {
//     // console.log(i+1)
//     // console.log("Hello");
//     console.log(numbers[i]);
// }

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// Conditionals
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i])
}




