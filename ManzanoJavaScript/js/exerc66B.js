let numP, somaTotalPares = 0;

for (numP = 1; numP <= 500; numP++) {
if (numP % 2 == 0) {
somaTotalPares = somaTotalPares + numP;
}
}

alert("Somatório de pares entre 1 e 500: " + somaTotalPares);
