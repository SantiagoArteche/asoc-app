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
import Swal from "sweetalert2";

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

  const { handleSubmit, handleChange, errors, values, resetForm } = useFormik({
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
      const { apellido: lastName, ...rest } = datos;
      const apellidoUpperCase = `${lastName[0].toUpperCase()}${lastName.slice(
        1,
        lastName.length
      )}`;

      const createUser = await fetch(
        "https://asociation-copy-api.vercel.app/api/clients",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...rest, apellido: apellidoUpperCase }),
        }
      );

      if (createUser.status == 200) {
        await createUser.json();
        Swal.fire("Completado!", "Cliente registrado correctamente", "success");
        resetForm();
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
      resetForm={resetForm}
      values={values}
    />
  );
};
