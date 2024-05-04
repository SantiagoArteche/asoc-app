import { Router } from "express";
import {
  createClient,
  deleteClient,
  findByDni,
  findByLastName,
  getAllClients,
} from "../controllers/client.controllers.js";

export const clientRouter = Router();

clientRouter.get("/", getAllClients);

clientRouter.get("/lastName/:lastName", findByLastName);

clientRouter.get("/dni/:dni", findByDni);

clientRouter.post("/", createClient);

clientRouter.delete("/deleteClient", deleteClient);
