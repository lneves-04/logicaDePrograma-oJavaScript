function calcularDuracao() {
    let horaInicio = Number(prompt("Digite a hora do início do jogo:"));
    let horaFim = Number(prompt("Digite a hora do final do jogo:"));
    let duracao;

    if (horaFim >= horaInicio) {
        duracao = horaFim - horaInicio;
    } else {
        duracao = (24 - horaInicio) + horaFim;
    }

    console.log("A duração do jogo foi de " + duracao + " horas");
}

calcularDuracao();