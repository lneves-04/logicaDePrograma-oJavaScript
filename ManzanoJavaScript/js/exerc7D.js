let tempoViagem = Number(prompt("Informe o tempo gasto na viagem (horas):"));
let velMedia = Number(prompt("Informe a velocidade média (km/h):"));

let distPercorrida = tempoViagem * velMedia;
let litrosConsumidos = distPercorrida / 12;

console.log("Velocidade Média: " + velMedia + " km/h");
console.log("Tempo Gasto: " + tempoViagem + " horas");
console.log("Distância Percorrida: " + distPercorrida + " km");
console.log("Litros de Combustível Utilizados: " + litrosConsumidos.toFixed(2));