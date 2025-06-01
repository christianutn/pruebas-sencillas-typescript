"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alumno {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    set nombre(value) {
        this._nombre = value;
    }
    set edad(value) {
        this._edad = value;
    }
    imprimirDatos() {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}`);
    }
    imprimirEsMayorDeEdad() {
        if (this._edad >= 18) {
            console.log(`${this._nombre} es mayor de edad.`);
        }
        else {
            console.log(`${this._nombre} es menor de edad.`);
        }
    }
}
exports.default = Alumno;
