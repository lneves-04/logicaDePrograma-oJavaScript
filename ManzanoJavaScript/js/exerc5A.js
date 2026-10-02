let tabNum = Number(prompt("Quer calcular a tabuada de qual número"));
let contMult = 1;
while (contMult <= 10) {
    let resProd = tabNum * contMult;
    console.log(tabNum + " x " + contMult + " = " + resProd + "<br>");
    contMult++; 
}