var text = "";
var count = 0;

function changeText(input) {
    text = input.value;
    count++
    console.log(text);
}

function complete() {
    alert(`Greatb job! You typed ${count} characters in a minute`)
    document.querySelector("#result").innerText = text;
}

setTimeout(complete, 60000);