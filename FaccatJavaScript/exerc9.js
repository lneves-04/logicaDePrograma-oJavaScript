let salarioAtual = Number(prompt("Digite o salário atual: R$"));
let percentual = Number(prompt("Digite o percentual de reajuste:"));

function calcularReajuste(salario, percentual) {
    return salario + (salario * percentual / 100);
}

let novoSalario = calcularReajuste(salarioAtual, percentual);

document.write("O novo salário é de: R$ " + novoSalario.toFixed(2));
