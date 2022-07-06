function printExpression(value) {
    document.querySelector("#expression").innerHTML += value;
}

function calculate() {
    let expression = document.querySelector("#expression").innerHTML;
    document.querySelector("#answer").innerHTML = eval(expression);
}