import { Proyecto } from "./clases/proyecto.js";
import { Trabajador } from "./clases/trabajador.js";

// 1
const trabajador1 = new Trabajador(
  "Susana Farias",
  "12345678-9",
  "Ayudante docente"
);

const trabajador2 = new Trabajador("Angel Duarte", "9876543-2", "Profesor");
const trabajador3 = new Trabajador(
  "Pepito Pérez",
  "6541256-1",
  "Ayudante del asistente"
);

const proyecto1 = new Proyecto("Fullstack Javascript", [
  trabajador1,
  trabajador3,
]);

console.log(proyecto1.getInforme());
// cambio en trabajadores
proyecto1.trabajadores = [trabajador1, trabajador2];
console.log(proyecto1.getInforme());
// getters + setters
const rutT1 = trabajador1.getRut();
console.log(`rut Trabajador 1:`, rutT1);

const cargoT2 = trabajador2.getCargo();
console.log(`cargo Trabajador 2:`, cargoT2);

trabajador1.rut = "41228961-4";
trabajador2.cargo = "Docente";
// filtrado
proyecto1.filtrarTrabajadores("sus");
proyecto1.filtrarTrabajadores("arte");
proyecto1.filtrarTrabajadores("an");
