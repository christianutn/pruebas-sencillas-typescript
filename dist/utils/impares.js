"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obtenerImpares = (limiteInferior, limiteSuperior) => {
    const impares = [];
    for (let i = limiteInferior; i <= limiteSuperior; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    return impares;
};
exports.default = obtenerImpares;
