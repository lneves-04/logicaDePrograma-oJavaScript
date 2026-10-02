function verificarEstoque() {
    let quantidadeAtual = Number(prompt("Escreva a quantidade atual do estoque:"));
    let quantidadeMaxima = Number(prompt("Escreva a quantidade máxima do estoque:"));
    let quantidadeMinima = Number(prompt("Escreva a quantidade mínima do estoque:"));
    let quantidadeMedia;

    quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

    console.log("");
    console.log("Quantidade Média do Estoque: " + quantidadeMedia);

    if (quantidadeAtual >= quantidadeMedia) {
        console.log("Não efetuar compra");
    } else {
        console.log("Efetuar compra");
    }
}

verificarEstoque();