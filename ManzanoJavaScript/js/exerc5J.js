let numeroLoop = 50;
let somaDosPares = 0;
let qtdPares = 0;
while (numeroLoop <= 70) {
    if (numeroLoop % 2 == 0) {
        somaDosPares = somaDosPares + numeroLoop;
        qtdPares++;
    }

    numeroLoop++;
}

let mediaDosPares = somaDosPares / qtdPares;

console.log("Somatório dos pares entre 50 e 70: " + somaDosPares);
console.log("Média aritmética dos pares: " + mediaDosPares.toFixed(2));