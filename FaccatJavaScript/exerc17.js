let nota1 = Number(prompt("Digite a nota da 1ª avaliação:"));
let nota2 = Number(prompt("Digite a nota da 2ª avaliação:"));

let media = (nota1 + nota2) / 2;

if (media >= 6) {
    alert("A média do aluno é: " + media.toFixed(2) + "\nAluno aprovado");
} else {
    alert("A média do aluno é: " + media.toFixed(2) + "\nAluno reprovado");
}
