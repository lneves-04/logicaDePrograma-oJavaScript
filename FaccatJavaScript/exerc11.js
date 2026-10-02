let numCarros = Number(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = Number(prompt("Digite o valor total das vendas: R$"));
let salarioFixo = Number(prompt("Digite o salário fixo: R$"));
let valorPorCarro = Number(prompt("Digite o valor recebido por carro vendido: R$"));

function calcularSalario(carros, vendas, salario, valorCarro) {
    let comissaoCarros = carros * valorCarro;
    let comissaoVendas = vendas * 5 / 100;

    return salario + comissaoCarros + comissaoVendas;
}

let salarioFinal = calcularSalario(
    numCarros,
    valorTotalVendas,
    salarioFixo,
    valorPorCarro
);

alert("O salário final do vendedor é de: R$ " + salarioFinal.toFixed(2));