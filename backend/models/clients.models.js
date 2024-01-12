import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    dni: String,
    nombre: String,
    apellido: String,
    grupoFamiliar: String,
    direccion: String,
    telefono: String,
    mercaderias: String,
    prendas: String,
    zapatillas: String,
    microCredito: String,
    numeroCuota: String,
    otros: String,
    fecha: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

export const clientModel = model("clients", clientSchema);
