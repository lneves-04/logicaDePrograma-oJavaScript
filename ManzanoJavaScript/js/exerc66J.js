let expatual, resultadopot, idxmulti;

for (expatual = 0; expatual <= 15; expatual++) {
resultadopot = 1;
for (idxmulti = 1; idxmulti <= expatual; idxmulti++) {
    resultadopot = resultadopot * 3;
}

alert("3 elevado a " + expatual + " = " + resultadopot);

}
