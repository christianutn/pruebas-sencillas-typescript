"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const impares_1 = __importDefault(require("./utils/impares"));
const imprimirSueldos_controllers_1 = __importDefault(require("./controllers/imprimirSueldos.controllers"));
const alumno_models_1 = __importDefault(require("./models/alumno.models"));
const main = () => {
    console.log("Ejercicios de Programación en JavaScript");
    console.log("====================================");
    // 1. Crear un algoritmo que muestre los números impares entre el 0 y el 100.
    const limiteInferior = 1;
    const limiteSuperior = 100;
    const impares = (0, impares_1.default)(limiteInferior, limiteSuperior);
    console.log(`Números impares entre ${limiteInferior} y ${limiteSuperior}:`, impares);
    /*2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor.
    Crear un método para imprimir el vector. */
    console.log("====================================");
    console.log("A continuación ingrese los sueldos de los cinco operarios:");
    const imprimirSueldosController = new imprimirSueldos_controllers_1.default();
    imprimirSueldosController.imprimirSueldos();
    /*3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el
    ingreso de datos. Definir otros dos métodos para imprimir los datos ingresados y un mensaje si
    es mayor o no de edad (edad >= 18).*/
    console.log("====================================");
    console.log("Crear y mostrar ALumno");
    const alumno = new alumno_models_1.default("Juan", 20);
    alumno.imprimirDatos();
    alumno.imprimirEsMayorDeEdad();
    /* 4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando
    para tal fin una única línea de código. const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l", "bro", "g"];*/
    console.log("====================================");
    console.log("Diferencia entre dos listas");
    const x = ["n", "bro", "c", "|"];
    const y = ["d", "n", "l", "bro", "g"];
    const lista_con_diferencia = y.filter(e => !x.includes(e));
    console.log("Lista 'y':", y);
    console.log("Lista 'x':", x);
    console.log("Diferencia entre ambas listas:", lista_con_diferencia);
};
main();
