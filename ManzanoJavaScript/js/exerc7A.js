let tempCelsius = Number(prompt("Digite a temperatura em Celsius:"));

let tempFahr = (9 * tempCelsius + 160) / 5;

console.log("Temperatura em Fahrenheit: " + tempFahr.toFixed(2));