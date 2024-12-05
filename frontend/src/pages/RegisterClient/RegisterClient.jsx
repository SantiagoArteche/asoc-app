import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterClientPresentational } from "./RegisterClientPresentational";
import Swal from "sweetalert2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#185457",
    },
    secondary: {
      main: "#a2ede6",
    },
    background: {
      default: "#08282b",
      paper: "#185457",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a2ede6",
    },
  },
});

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre requerido"),
  dni: Yup.string().required("DNI requerido"),
  apellido: Yup.string().required("Apellido requerido"),
  grupoFamiliar: Yup.string().required("Grupo Familiar requerido"),
  direccion: Yup.string().required("Dirección requerida"),
  telefono: Yup.string().required("Teléfono requerido"),
  mercaderias: Yup.string(),
  prendas: Yup.string(),
  zapatillas: Yup.string(),
  microCredito: Yup.string(),
  numeroCuota: Yup.string().required("Número de cuota requerido"),
  otros: Yup.string(),
});

export const RegisterClient = () => {
  const formik = useFormik({
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
    validationSchema,
    onSubmit: async (values) => {
      const { apellido, ...rest } = values;
      const apellidoUpperCase =
        apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

      try {
        const response = await fetch(
          "https://asociation-copy-api.vercel.app/api/clients",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...rest, apellido: apellidoUpperCase }),
          }
        );

        if (response.ok) {
          await response.json();
          Swal.fire(
            "Completado!",
            "Cliente registrado correctamente",
            "success"
          );
          formik.resetForm();
        } else {
          throw new Error("Failed to register client");
        }
      } catch (error) {
        Swal.fire("Error!", "No se pudo registrar el cliente", "error");
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RegisterClientPresentational formik={formik} />
    </ThemeProvider>
  );
};
