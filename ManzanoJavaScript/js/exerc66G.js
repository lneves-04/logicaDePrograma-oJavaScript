let numimpar, fcontador, fatresultado;

for (numimpar = 1; numimpar <= 10; numimpar++) {
if (numimpar % 2 != 0) {
fatresultado = 1;

    for (fcontador = 1; fcontador <= numimpar; fcontador++) {
        fatresultado = fatresultado * fcontador;
    }

    alert("O fatorial do ímpar " + numimpar + " é: " + fatresultado);
}


}
