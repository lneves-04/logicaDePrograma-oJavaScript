let nomeUsuario = prompt("Informe o nome:");
let sexoUsuario = prompt("Informe o sexo (M/F):");

if (sexoUsuario == "M" || sexoUsuario == "m") {
alert("Ilmo Sr. " + nomeUsuario);
} else {
if (sexoUsuario == "F" || sexoUsuario == "f") {
alert("Ilma Sra. " + nomeUsuario);
} else {
alert("Opção de sexo inválida.");
}
}
