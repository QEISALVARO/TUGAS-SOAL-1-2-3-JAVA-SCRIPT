const realine = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitung(ekspresi){

    ekspresi = ekspresi.trim();

    const pola = /^(\d+\.?\d*)\s*([\+\-\*\/])\s*(\d+\.?\d*)$/;
    const cocok = ekspresi.match(pola);

    if (!cocok) {
        return "Format salah Contoh 2 + 3"
    }

    const a = parseFloat(cocok[1])
    const op = cocok[2]
    const b = parseFloat(cocok[3])

    switch (op) {
        case '+' return a + b;
        case '-' return a - b;
        case '*' return a * b;
        case '/':
            if (b===0) return
            return a / b;
        case '%' : return a % b 
    }

};

function tampilkanBantuan(){

}

function tanya(){

}

console.log("========================")
console.log("WELCOME TO MY CALCULATOR")
console.log("========================")