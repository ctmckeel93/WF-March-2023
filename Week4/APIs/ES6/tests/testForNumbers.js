

function testForNumberValues(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Incorrect values. a and b must be numbers");
        return false
    } else {
        console.log(a+b);
        return true;
    }
}

module.exports = testForNumberValues;