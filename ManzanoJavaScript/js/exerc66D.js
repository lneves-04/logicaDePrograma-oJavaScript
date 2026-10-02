let posicaoQuadro, graosNoQuadro = 1, totalAcumulado = 0;

for (posicaoQuadro = 1; posicaoQuadro <= 64; posicaoQuadro++) {
totalAcumulado = totalAcumulado + graosNoQuadro;
graosNoQuadro = graosNoQuadro * 2;
}

alert("Soma total de grãos no tabuleiro: " + totalAcumulado);
