       let numeroConta = Number(prompt("Digite o número da conta:"));
        let saldo = Number(prompt("Digite o saldo anterior: R$"));
        let debito = Number(prompt("Digite o total de débitos: R$"));
        let credito = Number(prompt("Digite o total de créditos: R$"));

        let saldoAtual = saldo - debito + credito;
        let situacao;

        if (saldoAtual >= 0) {
            situacao = "Saldo positivo";
        } else {
            situacao = "Saldo negativo";
        }

        document.getElementById("resultado").innerHTML =
            "Número da conta: " + numeroConta + "<br>" +
            "Novo saldo: R$ " + saldoAtual.toFixed(2) + "<br>" +
            "Status: " + situacao;
    
