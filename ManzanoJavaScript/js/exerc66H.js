let valorentrada, maiorlido, menorlido;
let flagprimeiro = true;

valorentrada = Number(prompt("Informe um número inteiro (negativo para parar):"));

while (valorentrada >= 0) {
if (flagprimeiro) {
maiorlido = valorentrada;
menorlido = valorentrada;
flagprimeiro = false;
} else {
if (valorentrada > maiorlido) {
maiorlido = valorentrada;
}
    if (valorentrada < menorlido) {
        menorlido = valorentrada;
    }
}

valorentrada = Number(prompt("Informe um número inteiro (negativo para parar):"));
}
alert("Maior valor lido: " + maiorlido +
"\nMenor valor lido: " + menorlido);
