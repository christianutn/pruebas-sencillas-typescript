class Alumno {
    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public get edad(): number {
        return this._edad;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    public imprimirDatos(): void {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}`);
    }

    public imprimirEsMayorDeEdad(): void {
        if (this._edad >= 18) {
            console.log(`${this._nombre} es mayor de edad.`);
        } else {
            console.log(`${this._nombre} es menor de edad.`);
        }
    }
}

export default Alumno;