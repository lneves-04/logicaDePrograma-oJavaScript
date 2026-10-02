let numeroX = parseInt(prompt("Digite o primeiro valor inteiro:"));
let numeroY = parseInt(prompt("Digite o segundo valor inteiro:"));
let diffResultado;

if (numeroX > numeroY) {
    diffResultado = numeroX - numeroY;
} else {
    diffResultado = numeroY - numeroX;
}

alert("A diferença entre o maior e o menor é: " + diffResultado);
