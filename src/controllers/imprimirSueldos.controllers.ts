import Operario from "../models/operario.models";
import readlineSync from "readline-sync";


class ImprimirSueldosController {
    // Creamos los objtos de operario para simplificar
  private operarios: Operario[] = [
    new Operario("Juan", 0),
    new Operario("Ana", 0),
    new Operario("Luis", 0),
    new Operario("Maria", 0),
    new Operario("Pedro", 0),
  ];

  // Ingresamos por consola los sueldos de los operarios
  private cargarSueldos(): void {
    this.operarios.forEach(operario => {
        let sueldo: number;
        sueldo = readlineSync.questionFloat(`Ingrese el sueldo de ${operario.nombre}: `);

        while (sueldo < 0 || isNaN(sueldo)) {
            console.log("El sueldo no puede ser negativo. Intente nuevamente.");
            sueldo = readlineSync.questionFloat(`Ingrese el sueldo de ${operario.nombre}: `);
        }
        operario.sueldo = sueldo;
    });
  }


  public imprimirSueldos(): void {
    this.cargarSueldos();
    console.log("Lista de sueldos de los operarios:");
    this.operarios.forEach((operario) => {
      console.log(`${operario.nombre}: $${operario.sueldo.toFixed(2)}`);
    });
  }
}

export default ImprimirSueldosController;