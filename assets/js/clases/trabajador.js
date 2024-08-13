function Trabajador(nombre, rut, cargo) {
  let _nombre = nombre;
  let _rut = rut;
  let _cargo = cargo;

  Object.defineProperties(this, {
    nombre: {
      get: function () {
        return _nombre;
      },
      set: function (nuevoNombre) {
        console.log(
          `Cambio de nombre en trabajador: ${_nombre} ==> ${nuevoNombre}`
        );
        _nombre = nuevoNombre;
      },
    },
    rut: {
      get: function () {
        return _rut;
      },
      set: function (nuevoRut) {
        console.error("El rut no puede sobrescribirse");
      },
    },
    cargo: {
      get: function () {
        return _cargo;
      },
      set: function (nuevoCargo) {
        console.log(
          `Cambio de cargo para el trabajador ${_nombre}: ${_cargo} ==> ${nuevoCargo}`
        );
        _cargo = nuevoCargo;
      },
    },
  });
}

// Métodos en el prototipo
Trabajador.prototype.getNombre = function () {
  return this.nombre;
};
Trabajador.prototype.getRut = function () {
  return this.rut;
};
Trabajador.prototype.getCargo = function () {
  return this.cargo;
};

export { Trabajador };
