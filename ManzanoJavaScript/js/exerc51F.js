let vA = Number(prompt("Informe o valor A:"));
let vB = Number(prompt("Informe o valor B:"));
let vC = Number(prompt("Informe o valor C:"));

let auxOrdena;
if (vA > vB) {
auxOrdena = vA;
vA = vB;
vB = auxOrdena;
}

if (vA > vC) {
auxOrdena = vA;
vA = vC;
vC = auxOrdena;
}

if (vB > vC) {
auxOrdena = vB;
vB = vC;
vC = auxOrdena;
}

alert("Valores ordenados: " + vA + " -> " + vB + " -> " + vC);
