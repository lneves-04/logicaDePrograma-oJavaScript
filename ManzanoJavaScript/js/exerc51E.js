let coefA = Number(prompt("Digite A:"));
let coefB = Number(prompt("Digite B:"));
let coefC = Number(prompt("Digite C:"));

let deltaEquacao, x1, x2;

if (coefA == 0) {
alert("A não pode ser zero.");
} else {
deltaEquacao = coefB ** 2 - 4 * coefA * coefC;


if (deltaEquacao < 0) {
    alert("Não possui raízes reais.");
} else {
    x1 = (-coefB + Math.sqrt(deltaEquacao)) / (2 * coefA);
    x2 = (-coefB - Math.sqrt(deltaEquacao)) / (2 * coefA);

    alert("X1 = " + x1.toFixed(2) + "\nX2 = " + x2.toFixed(2));
}


}
