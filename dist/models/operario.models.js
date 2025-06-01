"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operario {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre() {
        return this._nombre;
    }
    get sueldo() {
        return this._sueldo;
    }
    set nombre(value) {
        this._nombre = value;
    }
    set sueldo(value) {
        this._sueldo = value;
    }
}
exports.default = Operario;
