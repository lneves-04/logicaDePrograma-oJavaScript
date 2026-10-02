let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
}

let mediaFinal = calcularMedia(nota1, nota2, nota3);

alert("A média final é: " + mediaFinal.toFixed(2));
