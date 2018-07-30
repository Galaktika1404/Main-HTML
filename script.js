function toInput(id) {
    let value = document.getElementById(id).value;
   write(value);
}

function write (symbol) {
    document.getElementById('result').value += symbol;
}

function subtract(){
    const a = document.getElementById('').value;
    const b = document.getElementById('').value;
    return a-b;
}

function clearValue() {
    write('');
}
