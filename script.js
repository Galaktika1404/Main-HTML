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
function addNum (){
    p1 = document.getElementById('result').value;
    clearValue();
    operation = "+";

}
function multiply (){
    p1 = document.getElementById('result').value;
    clearValue();
    operation = "*";

}

function getResult() {

    let itogo;
    p2 = document.getElementById('result').value;

// logika
    if (operation === "/") {
        itogo = p1 / p2;
    }
    else if (operation === "+") {
        itogo = Number(p1) + Number(p2);

    }
    else if (operation === "-") {
        itogo = p1 - p2;
    }
    else if(operation === "*" ) {
        itogo = p1 * p2;
    }

    // end logika

    clearValue();
    write(itogo);

}
