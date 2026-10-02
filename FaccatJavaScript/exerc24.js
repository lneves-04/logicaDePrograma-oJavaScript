function calcularSalario() {
    let salarioFixo = Number(prompt("Digite o seu salário fixo:"));
    let valorVendas = Number(prompt("Digite o seu valor de vendas no mês:"));
    let comissao;
    let salarioFinal;

    if (valorVendas <= 1500) {
        comissao = valorVendas * 0.03;
    } else {
        comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
    }

    salarioFinal = salarioFixo + comissao;

    console.log("O seu salário final é: R$ " + salarioFinal.toFixed(2));
}

calcularSalario();