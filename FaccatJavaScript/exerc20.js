let nome = prompt("Digite seu nome:");
let genero = prompt("Digite seu gênero (F: Feminino / M: Masculino):");
let altura = Number(prompt("Digite sua altura:"));

let pesoIdeal;

if (genero.toUpperCase() == "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

alert(nome + ", seu peso ideal é: " + pesoIdeal.toFixed
