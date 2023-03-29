// Conditionals

/* Syntax -> 
if (condition) { 
    do this
} 
else if {
    do another thing
} else {
    do something else
} */
var numbers = [1,2,3,4,5, 1000, 45, 334, 8127309712903709, 44, 99,2];
var colors = ["Red",,"Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Cyan"];
// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i])
//     console.log("Checking for violet");
//     if (colors[i] == "Violet") {
//         console.log("Yay we made a rainbow!");
//         break;
//     } else {
//         console.log("Not there yet");
//     }
// }

console.log(colors[1]);

/*
    Greater than - >
    Less than - <
    greater than or equalto - >=
    less than or equalto - <=
    equal to - == OR ===
*/

// 10 == "10" -> This is true
// 10 === "10" -> this is not
var filteredArray = []
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50 ) {
        console.log(numbers[i]);
        filteredArray.push(numbers[i]);
    }
}

console.log(filteredArray);

