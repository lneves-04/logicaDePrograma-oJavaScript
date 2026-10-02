let valdividendo = Number(prompt("Digite o dividendo:"));
let valdivisor = Number(prompt("Digite o divisor:"));
let quocienteobtido = 0;
let restosub = valdividendo;

while (restosub >= valdivisor) {
restosub = restosub - valdivisor;
quocienteobtido = quocienteobtido + 1;
}

alert("Resultado do quociente: " + quocienteobtido +
"\nResto final: " + restosub);
