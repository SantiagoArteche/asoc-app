import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    dni: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    grupoFamiliar: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    mercaderias: {
      type: String,
    },
    prendas: {
      type: String,
    },
    zapatillas: {
      type: String,
    },
    microCredito: {
      type: String,
    },
    numeroCuota: { type: String, required: true },
    otros: {
      type: String,
    },
    fecha: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

export const clientModel = model("clients", clientSchema);
