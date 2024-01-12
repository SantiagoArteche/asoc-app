import express from "express";
import { clientRouter } from "./routes/clients.routes.js";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const whiteList = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Access denied"));
    }
  },
};
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors(corsOptions));
mongoose
  .connect(
    `mongodb+srv://santiarteche:${""}@associationdb.9123oxl.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log(`BDD conectada`))
  .catch((error) => console.log(error));

app.use("/api/clients", clientRouter);

app.listen(PORT, () => {
  console.log(`SV ON PORT ${PORT}`);
});
