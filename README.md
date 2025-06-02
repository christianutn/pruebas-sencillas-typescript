# Pruebas Sencillas en TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript) ![Node.js](https://img.shields.io/badge/Node.js-Runtime-green?style=for-the-badge&logo=node.js)

Este repositorio contiene una colección de soluciones a ejercicios básicos de lógica de programación, implementados en TypeScript. El propósito es demostrar la aplicación de conceptos fundamentales del lenguaje y la programación estructurada y orientada a objetos.

## 📜 Ejercicios Resueltos

1.  **Números Impares:**
    *   Un algoritmo que identifica y muestra todos los números impares dentro del rango de 0 a 100.
    *   Implementado en: `src/index.ts` (función `obtenerImpares`).

2.  **Gestión de Sueldos de Operarios:**
    *   Programa que permite el ingreso de los sueldos para 5 operarios y luego los imprime.
    *   Utiliza la clase `Operario` definida en `src/models/operario.models.ts`.
    *   La lógica de carga e impresión se encuentra en la clase `ImprimirSueldosController` en `src/controllers/imprimirSueldos.controllers.ts`.
    *   La interacción para el ingreso de sueldos se realiza a través de la consola utilizando `readline-sync`.

3.  **Clase Alumno:**
    *   Definición de la clase `Alumno` con atributos para nombre y edad.
    *   El constructor inicializa estos datos.
    *   Incluye métodos para `imprimirDatos()` del alumno y `imprimirEsMayorDeEdad()` que verifica si el alumno tiene 18 años o más.
    *   Implementada en: `src/models/alumno.models.ts`.
    *   Ejemplificada en: `src/index.ts`. 
4.  **Diferencia entre Arrays (ES6):**
    *   Dados dos arrays `x` e `y`, el script imprime los elementos presentes en `y` pero no en `x`.
    *   Resuelto en una única línea de código utilizando los métodos `filter()` e `includes()` de JavaScript ES6.
    *   Implementado en: `src/index.ts` (sección `// 4. ...`).

## 🛠️ Tecnologías Utilizadas

*   **Lenguaje:** TypeScript
*   **Entorno de Ejecución:** Node.js
*   **Manejo de Entrada por Consola:** `readline-sync` (para el ejercicio de sueldos)

## ⚙️ Configuración y Puesta en Marcha

### Prerrequisitos

*   Node.js (v16.x o superior recomendado)
*   npm (v8.x o superior recomendado) o yarn

### Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/christianutn/pruebas-sencillas-typescript.git
    cd pruebas-sencillas-typescript
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
    Esto instalará TypeScript, `readline-sync`, los tipos necesarios y `ts-node-dev` para el script de desarrollo.

### Ejecución

El archivo `src/index.ts` contiene la lógica para ejecutar y mostrar los resultados de todos los ejercicios.

1.  **Ejecutar en modo desarrollo (con recarga automática usando `ts-node-dev`):**
    ```bash
    npm run dev
    ```

2.  **Ejecutar una sola vez con `ts-node` (sin recarga automática):**
    ```bash
    npx ts-node src/index.ts
    ```

3.  **Compilar a JavaScript y ejecutar (flujo de producción):**
    *   Compilar:
        ```bash
        npm run build
        ```
        Esto generará los archivos JavaScript en la carpeta `dist/`.
    *   Ejecutar el archivo compilado:
        ```bash
        node dist/index.js
        ```


