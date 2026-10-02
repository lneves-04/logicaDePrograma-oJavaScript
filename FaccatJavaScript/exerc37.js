function verificarAcesso() {
    let codigo = Number(prompt("Digite o código do usuário:"));

    if (codigo !== 1234) {
        console.log("Usuário inválido!");
    } else {
        let senha = Number(prompt("Digite a senha:"));

        if (senha !== 9999) {
            console.log("Senha incorreta");
        } else {
            console.log("Acesso permitido");
        }
    }
}

verificarAcesso();