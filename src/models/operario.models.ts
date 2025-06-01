class Operario {
  private _nombre: string;
  private _sueldo: number;

  constructor(nombre: string, sueldo: number) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get sueldo(): number {
    return this._sueldo;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }

  public set sueldo(value: number) {
    this._sueldo = value;
  }

}

export default Operario;