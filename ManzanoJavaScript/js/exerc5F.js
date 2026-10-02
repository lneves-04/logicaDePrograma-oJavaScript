let numBase = Number(prompt("Digite a base:"));
let numExp = Number(prompt("Digite o expoente:"));
let resPotencia = 1;
let contador = 1;

while (contador <= numExp) {
    resPotencia = resPotencia * numBase;
    contador++;
}

console.log("Resultado de " + numBase + " elevado a " + numExp + " é: " + resPotencia);