let salarioAtual = Number(prompt("Digite o salário atual: R$"));
let percentual = Number(prompt("Digite o percentual de reajuste:"));

let novoSalario = salarioAtual + (salarioAtual * percentual / 100);

alert("O novo salário é de: R$ " + novoSalario.toFixed(2));
