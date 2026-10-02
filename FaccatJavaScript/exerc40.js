function calcularCompra() {
    let nomeProduto = prompt("Digite o nome do produto:");
    let qtdComprada = Number(prompt("Digite a quantidade adquirida:"));
    let precoUnidade = Number(prompt("Digite o preço unitário:"));

    let valorCompra;
    let valorDesconto;
    let valorFinal;

    valorCompra = qtdComprada * precoUnidade;

    if (qtdComprada <= 5) {
        valorDesconto = valorCompra * 0.02;
    } else {
        if (qtdComprada <= 10) {
            valorDesconto = valorCompra * 0.03;
        } else {
            valorDesconto = valorCompra * 0.05;
        }
    }

    valorFinal = valorCompra - valorDesconto;

    console.log("Produto: " + nomeProduto);
    console.log("Total: R$ " + valorCompra.toFixed(2));
    console.log("Desconto: R$ " + valorDesconto.toFixed(2));
    console.log("Total a pagar: R$ " + valorFinal.toFixed(2));
}

calcularCompra();