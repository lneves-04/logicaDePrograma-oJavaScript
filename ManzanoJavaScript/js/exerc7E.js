let valorInicial = Number(prompt("Digite o valor original da prestação:"));
let taxaJuros = Number(prompt("Digite a taxa de juros (%):"));
let diasAtraso = Number(prompt("Digite o número de dias de atraso:"));

let valorPrestacao = valorInicial + (valorInicial * (taxaJuros / 100) * diasAtraso);

console.log("O valor atualizado da prestação é: R$ " + valorPrestacao.toFixed(2));