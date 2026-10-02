let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));

function converterParaCelsius(temperatura) {
    return (temperatura - 32) * 5 / 9;
}

let celsius = converterParaCelsius(fahrenheit);

alert("A temperatura em Celsius é: " + celsius.toFixed(2) + "°C");
