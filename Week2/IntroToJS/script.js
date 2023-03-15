console.log("Hello");

/*
    Data Types

    - Strings -> Plain english text -> "Hello 'Corey' "
    - Numbers -> 1.902873490283479087
    - Booleans -> true/false
    - undefined
    - null

*/

console.log("Hello 'Corey'");

// Variables -> boxes we use to hold data types and pass around values
var name; // undefined
name = "Corey  Mckeel";
var ishungry = true;

// Operators
/*
+ -> can be used differently and can be used with strings
-
    *
/
*/

var a = 5;
var b = 10;
var c = a + b;
console.log(c);

// dogInABasket - camel case naming convention
var firstName = "Winter";
var lastName = "Lee";
var fullName = firstName + " " + lastName;
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);
console.log(firstName, lastName);
console.log(fullName);

// count = count + 1;
// count += 100; // count = count + 100
// count++
// count = count -1
// count -= 100;
// count--

// *= /= %, ** -> exponents 2**2

// Syntax
// function functionName () {
//     // Do something
// }
var count = 0;

function counting() {
    console.log("I am counting");
    count++
    return count;
}

counting(); // 1
counting(); // 2
counting(); // 3
counting(); // 4
console.log(counting());
// console.log(count);

// Arguments VS Parameters
function add(a,b) {
    console.log(a+b);
    return a + b;
}

add(10,5);
add(100,5);
add(10,50);
add(1,5);
add(11,55);
