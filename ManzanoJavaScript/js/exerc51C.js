let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let n4 = parseFloat(prompt("Digite a quarta nota:"));
let mediaNotas;

mediaNotas = (n1 + n2 + n3 + n4) / 4;

if (mediaNotas >= 5.0) {
    alert("Aprovado! Média obtida: " + mediaNotas.toFixed(2));
} else {
    alert("Reprovado! Média obtida: " + mediaNotas.toFixed(2));
}
