let custoFabrica = Number(prompt("Digite o custo de fábrica do carro: R$"));

let percentualDistr = 28;
let percentualImpost = 45;

let valorDistr = custoFabrica * percentualDistr / 100;
let valorImpost = custoFabrica * percentualImpost / 100;

let custoFinal = custoFabrica + valorDistr + valorImpost;

alert("O custo final ao consumidor é de: R$ " + custoFinal.toFixed(2));
