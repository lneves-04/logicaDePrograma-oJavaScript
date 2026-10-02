function verificarAposentadoria() {
    let codigoFuncionario = Number(prompt("Digite o código do funcionário:"));
    let anoNascimento = Number(prompt("Digite o ano de nascimento:"));
    let anoEntrada = Number(prompt("Digite o ano de ingresso na empresa:"));

    let idadeAtual = 2026 - anoNascimento;
    let tempoEmpresa = 2026 - anoEntrada;

    console.log("Idade: " + idadeAtual);
    console.log("Tempo de trabalho: " + tempoEmpresa);

    if (idadeAtual >= 65 || tempoEmpresa >= 30 || (idadeAtual >= 60 && tempoEmpresa >= 25)) {
        console.log("Requerer aposentadoria");
    } else {
        console.log("Não requerer");
    }
}

verificarAposentadoria();