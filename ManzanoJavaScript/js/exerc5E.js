let exp = 0;

while (exp <= 15) {
    let valorPot = 1;
    let iAux = 1;

    while (iAux <= exp) {
        valorPot = valorPot * 3;
        iAux++;
    }
    console.log("3 ^ " + exp + " = " + valorPot);
    exp++;
}