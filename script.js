var p1 = 0;
var p2 = 0;
var operation = 0;

function toInput(id) {
    write(document.getElementById(id).value);
}

function write(symbol) {
    document.getElementById('result').value += symbol;
}

function subtract() {
    p1 = document.getElementById('result').value;
    clearValue();
    operation = "-";
    console.log(p1);
    console.log(operation);
}

function clearValue() {
    document.getElementById('result').value = '';
}

function divide() {
    p1 = document.getElementById('result').value;
    clearValue();
    operation = "/";
    console.log(p1);
    console.log(operation);
}

function getResult() {

    let itogo;
    p2 = document.getElementById('result').value;
    console.log(p2);
    if (operation ==="/"){
    itogo = p1 / p2;}
//itogo = p1 - p2;
    clearValue();
    write(itogo);
}