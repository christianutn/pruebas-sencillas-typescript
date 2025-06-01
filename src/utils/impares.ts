const obtenerImpares = (limiteInferior: number, limiteSuperior: number): number[] => {
    const impares: number[] = [];
    for (let i = limiteInferior; i <= limiteSuperior; i++) {
        if (i % 2 !== 0) {
        impares.push(i);
        }
    }
    return impares;
}

export default obtenerImpares;
