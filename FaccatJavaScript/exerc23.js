function calcularPesoIdeal() {
    let nome = prompt("Qual é o seu nome?");
    let altura = Number(prompt("Informe a sua altura (exemplo 1.70):"));
    let sexo = prompt("Qual o seu sexo? Responda M para masculino ou F para feminino:");

    let pesoIdeal;

    if (sexo === "M" || sexo === "m") {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    console.log(
        "Olá, " + nome + "! Com base na sua altura, o seu peso recomendado é de " +
        pesoIdeal.toFixed(2) + " kg."
    );
}

calcularPesoIdeal();