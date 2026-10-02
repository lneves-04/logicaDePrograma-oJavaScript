let numInformado = parseInt(prompt("Digite um número inteiro:"));
let moduloResultado;

if (numInformado < 0) {
    moduloResultado = numInformado * (-1);
} else {
    moduloResultado = numInformado;
}

alert("O valor absoluto/módulo é: " + moduloResultado);
