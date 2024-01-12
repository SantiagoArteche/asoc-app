import { Router } from "express";
import { clientModel } from "../models/clients.models.js";

export const clientRouter = Router();

clientRouter.get("/", async (request, response) => {
  try {
    const clients = await clientModel.find();
    response.status(200).send({ response: "OK", message: clients });
  } catch (error) {
    response.status(400).send(error);
  }
});

clientRouter.post("/", async (request, response) => {
  const {
    dni,
    nombre,
    apellido,
    grupoFamiliar,
    direccion,
    telefono,
    mercaderias,
    prendas,
    zapatillas,
    microCredito,
    numeroCuota,
    otros,
  } = request.body;
  try {
    const clientCreate = await clientModel.create({
      dni,
      nombre,
      apellido,
      grupoFamiliar,
      direccion,
      telefono,
      mercaderias,
      prendas,
      zapatillas,
      microCredito,
      numeroCuota,
      otros,
    });

    response.status(200).send({ response: "OK", message: clientCreate });
  } catch (error) {
    response.status(400).send(error);
  }
});

clientRouter.post("/deleteClient", async (request, response) => {
  const { id } = request.body;
  try {
    console.log(id);
    const deleteClient = await clientModel.findByIdAndDelete(id);
    if (deleteClient) {
      return response
        .status(200)
        .send({ response: "OK", message: deleteClient });
    }
    response.status(404).send({ error: "Cliente no encontrado" });
  } catch (error) {
    response.status(500).send(error);
  }
});
