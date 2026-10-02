let indiceVal, numLido, iFatorial;
let fatorialVal, somaFatoriais = 0;

for (indiceVal = 1; indiceVal <= 15; indiceVal++) {
numLido = Number(prompt("Informe o " + indiceVal + "º número inteiro:"));
fatorialVal = 1;

for (iFatorial = 1; iFatorial <= numLido; iFatorial++) {
    fatorialVal = fatorialVal * iFatorial;
}
somaFatoriais = somaFatoriais + fatorialVal;
}
alert("O somatório de todos os fatoriais é: " + somaFatoriais);
