function calcularCompra() {
    let kgMorango = Number(prompt("Digite a quantidade de morangos em Kg:"));
    let kgMaca = Number(prompt("Digite a quantidade de maçãs em Kg:"));

    let precoMorango;
    let precoMaca;
    let totalCompra;
    let desconto;
    let valorPagar;

    if (kgMorango <= 5) {
        precoMorango = 2.50;
    } else {
        precoMorango = 2.20;
    }

    if (kgMaca <= 5) {
        precoMaca = 1.80;
    } else {
        precoMaca = 1.50;
    }

    totalCompra = (kgMorango * precoMorango) + (kgMaca * precoMaca);

    if (kgMorango + kgMaca > 8 || totalCompra > 25) {
        desconto = totalCompra * 0.10;
    } else {
        desconto = 0;
    }

    valorPagar = totalCompra - desconto;

    console.log("O valor a ser pago é: R$ " + valorPagar.toFixed(2));
}

calcularCompra();