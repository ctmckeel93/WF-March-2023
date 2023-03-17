console.log("Connected to JS");

function darkMode(btn) {
    var body = document.querySelector("body");
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btn.style.backgroundColor = "grey";
    btn.style.color = "white";
    
}
function lightMode(btn) {
    var body = document.querySelector("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "orangered";
    
}

function changePic(dropdown) {
    var img = document.querySelector("#target-pic");
    console.log(dropdown.value);
    img.src = "images/" + dropdown.value;
}













// console.log(document);

// Object

var person = {
    name: "Corey",
    age: 29,
}; // syntax

var hello = "Hello"
{
    name: "hello";
    value: "Hello"
} // This is what a variable is

// Dot notation
console.log(person.name);
console.log(person.age);

// var container = document.querySelector(".container");
// container.style.backgroundColor = "black";
console.log(body);