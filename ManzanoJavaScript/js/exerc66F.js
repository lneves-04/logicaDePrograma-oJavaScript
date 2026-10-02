let entradanum, somageral = 0, qtdentradas = 0;
let mediageral;

entradanum = Number(prompt("Digite um número (negativo para parar):"));

while (entradanum >= 0) {
somageral = somageral + entradanum;
qtdentradas = qtdentradas + 1;
entradanum = Number(prompt("Digite um número (negativo para parar):"));

}

if (qtdentradas > 0) {
mediageral = somageral / qtdentradas;

alert("Soma total: " + somageral +
      "\nMédia obtida: " + mediageral +
      "\nTotal de leituras: " + qtdentradas);

}
