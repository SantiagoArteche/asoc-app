import {
  TextField,
  Input,
  Button,
  Box,
  Grid,
  FormControl,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";

import { RegisterClientPresentacional } from "./RegisterClientPresentacional.jsx";
import { Link } from "react-router-dom";

export const RegisterClient = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1a8587",
      },
      lighter: "#1a8587",
      semiDark: "#08282b",
      dark: "#08282b",
    },
  });

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      dni: "",
      apellido: "",
      grupoFamiliar: "",
      direccion: "",
      telefono: "",
      mercaderias: "",
      prendas: "",
      zapatillas: "",
      microCredito: "",
      numeroCuota: "",
      otros: "",
    },
    onSubmit: async (datos) => {
      const createUser = await fetch("http://localhost:8080/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (createUser.status == 200) {
        await createUser.json();
        alert("Cliente registrado!!");
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Nombre requerido"),
      dni: Yup.string().required("Dni requerido"),
      apellido: Yup.string().required("Apellido requerido"),
      grupoFamiliar: Yup.string().required("Grupo Familiar requerido"),
      direccion: Yup.string().required("Dirección requerida"),
      telefono: Yup.string().required("Teléfono requerido"),
      mercaderias: Yup.string(),
      prendas: Yup.string(),
      zapatillas: Yup.string(),
      microCredito: Yup.string(),
      numeroCuota: Yup.string().required("Número de cuota requerido"),
    }),
  });

  return (
    <RegisterClientPresentacional
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      TextField={TextField}
      Input={Input}
      Button={Button}
      theme={theme}
      errors={errors}
      Grid={Grid}
      Box={Box}
      Link={Link}
      FormControl={FormControl}
    />
  );
};
