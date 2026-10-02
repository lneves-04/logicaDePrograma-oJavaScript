let anoAtual = Number(prompt("Digite o ano atual:"));
let anoNascimento = Number(prompt("Digite o ano de nascimento:"));

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert(
        "IDADE DA PESSOA: " + idade + " ANOS\n" +
        "A pessoa poderá votar este ano."
    );
} else {
    alert(
        "IDADE DA PESSOA: " + idade + " ANOS\n" +
        "A pessoa não poderá votar este ano."
    );
}
