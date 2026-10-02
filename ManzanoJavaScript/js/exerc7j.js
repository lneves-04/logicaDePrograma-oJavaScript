let cotacaoDolar = Number(prompt("Informe a cotação atual do dólar:"));
let saldoDolares = Number(prompt("Informe a quantidade de dólares guardados:"));

let valorEmReais = cotacaoDolar * saldoDolares;

console.log("O valor em Reais equivale a: R$ " + valorEmReais.toFixed(2));