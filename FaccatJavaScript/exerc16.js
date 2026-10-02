let quantidadeMacas = Number(prompt("Digite a quantidade de maçãs compradas:"));

let custoTotal;

if (quantidadeMacas < 12) {
    custoTotal = quantidadeMacas * 1.30;
} else {
    custoTotal = quantidadeMacas * 1.00;
}

alert("O custo total da compra é de: R$ " + custoTotal.toFixed(2));
