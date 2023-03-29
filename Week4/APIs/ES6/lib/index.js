const sumArray = require('./sumArray');
const testForNumberValues = require('../tests/testForNumbers');

const newArray = [1,2,3,4,5];

console.log(sumArray(newArray));

function add(a,b) {
    console.log("a:", typeof a)
    console.log("b:", typeof b)
    let check = testForNumberValues(a,b);
    if (check) {
        return a+b
    } else {
        return null;
    }
    
}

add(2,2);
add("2",2);

module.exports = add;