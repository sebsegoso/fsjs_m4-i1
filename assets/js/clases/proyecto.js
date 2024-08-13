/**
 * PROYECTO
 * @params {nombre , trabajadores}
 */

import { Trabajador } from "./trabajador.js";

function Proyecto(nombre, trabajadores) {
  let _nombre = nombre;
  let _trabajadores = trabajadores;

  Object.defineProperties(this, {
    nombre: {
      get: function () {
        return _nombre;
      },
      set: function (nuevoNombre) {
        console.log(
          `Cambio de nombre en proyecto: ${_nombre} ==> ${nuevoNombre}`
        );
        _nombre = nuevoNombre;
      },
    },
    trabajadores: {
      get: function () {
        return _trabajadores;
      },
      set: function (nuevosTrabajadores) {
        console.log(
          `Cambio de trabajadores en proyecto ${_nombre}: ${_trabajadores.map(t => t.nombre)} ==> ${nuevosTrabajadores.map(t => t.nombre)}`
        );
        _trabajadores = nuevosTrabajadores;
      },
    },
  });
}

Proyecto.prototype.getNombre = function () {
  return this.nombre;
};
Proyecto.prototype.getTrabajadores = function () {
  return this.trabajadores;
};
Proyecto.prototype.filtrarTrabajadores = function (text = "") {
  const result = this.trabajadores.filter((trabajador) =>
    trabajador.nombre.toLowerCase().includes(text.toLowerCase())
  );
  console.log(
    `Búsqueda: '${text}'`,
    result.map((t) => t.nombre),
    result
  );

  return result;
};
Proyecto.prototype.getInforme = function () {
  return `
Proyecto: ${this.nombre},
Trabajadores: ${this.trabajadores
    ?.map((t) => `${t.nombre}[${t.cargo}]`)
    ?.join(", ")}
`;
};

export { Proyecto };
