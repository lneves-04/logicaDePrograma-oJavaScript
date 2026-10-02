let nota1 = parseFloat(prompt("Informe a primeira nota bimestral:"));
let nota2 = parseFloat(prompt("Informe a segunda nota bimestral:"));
let nota3 = parseFloat(prompt("Informe a terceira nota bimestral:"));
let nota4 = parseFloat(prompt("Informe a quarta nota bimestral:"));
let notaExame, media1, mediaFinal;

media1 = (nota1 + nota2 + nota3 + nota4) / 4;

if (media1 >= 7.0) {
alert("Aprovado direto com média: " + media1.toFixed(2));
} else {
notaExame = parseFloat(prompt("Informe a nota obtida no exame:"));
mediaFinal = (media1 + notaExame) / 2;

```
if (mediaFinal >= 5.0) {
    alert("Aprovado em exame com média: " + mediaFinal.toFixed(2));
} else {
    alert("Reprovado no exame com média: " + mediaFinal.toFixed(2));
}
```

}
