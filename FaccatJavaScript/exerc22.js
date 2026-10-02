function calcularSalario() {
    let horas = Number(prompt("Digite o número de horas trabalhadas no mês:"));
    let valorHora = Number(prompt("Digite o valor da hora (R$):"));
    let normal;
    let extra;
    let extras;
    let total;

    if (horas > 160) {
        extras = horas - 160;
        normal = 160 * valorHora;
        extra = extras * (valorHora * 1.5);
        total = normal + extra;

        console.log("Horas extras: " + extras);
        console.log("Salário total: R$ " + total.toFixed(2));
    } else {
        total = horas * valorHora;
        console.log("Salário total: R$ " + total.toFixed(2));
    }
}

calcularSalario();