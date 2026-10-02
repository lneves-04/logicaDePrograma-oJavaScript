let valorAtual = Number(prompt("Digite o 1º número:"));
let maiorEncontrado = valorAtual;
let menorEncontrado = valorAtual;
let iContador;

for (iContador = 2; iContador <= 5; iContador++) {
valorAtual = Number(prompt("Digite o " + iContador + "º número:"));

if (valorAtual > maiorEncontrado) {
    maiorEncontrado = valorAtual;
}

if (valorAtual < menorEncontrado) {
    menorEncontrado = valorAtual;
}
}

alert("Maior valor lido: " + maiorEncontrado + "\nMenor valor lido: " + menorEncontrado);
