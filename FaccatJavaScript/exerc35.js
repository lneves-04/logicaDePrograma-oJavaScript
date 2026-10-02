function calcularIdades() {
    let homem1 = Number(prompt("Escreva a idade do primeiro homem:"));
    let homem2 = Number(prompt("Escreva a idade do segundo homem:"));
    let mulher1 = Number(prompt("Escreva a idade da primeira mulher:"));
    let mulher2 = Number(prompt("Escreva a idade da segunda mulher:"));

    let homemVelho;
    let homemNovo;
    let mulherVelha;
    let mulherNova;
    let somaIdades;
    let multiplicacaoIdades;

    if (homem1 > homem2) {
        homemVelho = homem1;
        homemNovo = homem2;
    } else {
        homemVelho = homem2;
        homemNovo = homem1;
    }

    if (mulher1 > mulher2) {
        mulherVelha = mulher1;
        mulherNova = mulher2;
    } else {
        mulherVelha = mulher2;
        mulherNova = mulher1;
    }

    somaIdades = homemVelho + mulherNova;
    multiplicacaoIdades = homemNovo * mulherVelha;

    console.log("A soma da idade do homem mais velho e da mulher mais nova é: " + somaIdades);
    console.log("A multiplicação do homem mais novo e da mulher mais velha é: " + multiplicacaoIdades);
}

calcularIdades();