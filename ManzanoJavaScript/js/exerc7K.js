let cotacaoDolar = Number(prompt("Informe a cotação do dólar:"));
let saldoReais = Number(prompt("Informe a quantidade de reais disponível:"));

let valorEmDolares = saldoReais / cotacaoDolar;

console.log("O valor em Dólares equivale a: US$ " + valorEmDolares.toFixed(2));