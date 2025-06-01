"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operario_models_1 = __importDefault(require("../models/operario.models"));
const readline_sync_1 = __importDefault(require("readline-sync"));
class ImprimirSueldosController {
    constructor() {
        // Creamos los objtos de operario para simplificar
        this.operarios = [
            new operario_models_1.default("Juan", 0),
            new operario_models_1.default("Ana", 0),
            new operario_models_1.default("Luis", 0),
            new operario_models_1.default("Maria", 0),
            new operario_models_1.default("Pedro", 0),
        ];
    }
    // Ingresamos por consola los sueldos de los operarios
    cargarSueldos() {
        this.operarios.forEach(operario => {
            let sueldo;
            sueldo = readline_sync_1.default.questionFloat(`Ingrese el sueldo de ${operario.nombre}: `);
            while (sueldo < 0 || isNaN(sueldo)) {
                console.log("El sueldo no puede ser negativo. Intente nuevamente.");
                sueldo = readline_sync_1.default.questionFloat(`Ingrese el sueldo de ${operario.nombre}: `);
            }
            operario.sueldo = sueldo;
        });
    }
    imprimirSueldos() {
        this.cargarSueldos();
        console.log("Lista de sueldos de los operarios:");
        this.operarios.forEach((operario) => {
            console.log(`${operario.nombre}: $${operario.sueldo.toFixed(2)}`);
        });
    }
}
exports.default = ImprimirSueldosController;
