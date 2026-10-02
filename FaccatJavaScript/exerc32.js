function verificarResultado() {
    let time1 = prompt("Escreva o nome do primeiro time:");
    let time2 = prompt("Escreva o nome do segundo time:");
    let gols1 = Number(prompt("Escreva o número de gols do " + time1 + ":"));
    let gols2 = Number(prompt("Escreva o número de gols do " + time2 + ":"));

    if (gols1 > gols2) {
        console.log("Vencedor: " + time1);
    } else {
        if (gols2 > gols1) {
            console.log("Vencedor: " + time2);
        } else {
            console.log("Empate");
        }
    }
}

verificarResultado();