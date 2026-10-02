let termoUm = 1;
let termoDois = 1;
console.log(termoUm);
console.log(termoDois);

let contFib = 3;

while (contFib <= 15) {
    let termoProximo = termoUm + termoDois;

    console.log(termoProximo);

    termoUm = termoDois;
    termoDois = termoProximo;

    contFib++;
}