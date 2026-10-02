function verificarTriangulo() {
    let A = Number(prompt("Escreva o lado A:"));
    let B = Number(prompt("Escreva o lado B:"));
    let C = Number(prompt("Escreva o lado C:"));

    console.log("");

    if (A < B + C && B < A + C && C < A + B) {
        console.log("Os valores formam um triângulo!");
    } else {
        console.log("Os valores não formam um triângulo!");
    }
}

verificarTriangulo();