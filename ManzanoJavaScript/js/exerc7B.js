let grausFahrenheit = Number(prompt("Informe a temperatura em Fahrenheit:"));

let grausCelsius = (grausFahrenheit - 32) * (5 / 9);

console.log("Temperatura equivalente em Celsius: " + grausCelsius.toFixed(2));