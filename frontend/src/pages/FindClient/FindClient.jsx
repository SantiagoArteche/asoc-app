import { useEffect, useState } from "react";
import { Box, Button, TextField, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const FindClient = () => {
  const [spreadsheet, setSpreadsheet] = useState([]);
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

  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({
    initialValues: {
      dni: "",
    },
    validateOnChange: false,
    onSubmit: async ({ dni }) => {
      const findClientByDNI = await fetch(
        `https://asociation-copy-api.vercel.app/api/clients/dni/${dni}`
      );

      if (findClientByDNI.status === 200) {
        setSpreadsheet(await findClientByDNI.json());
      } else {
        Swal.fire("Error", "No existe cliente con ese dni", "error");
      }

      resetForm();
    },
    validationSchema: Yup.object({
      dni: Yup.string().required("Dni es requerido"),
    }),
  });

  const {
    handleChange: changeLastName,
    handleSubmit: submitLastName,
    resetForm: resetLastName,
    values: valuesLastName,
    errors: errorsLastName,
  } = useFormik({
    initialValues: {
      apellido: "",
    },
    validateOnChange: false,
    onSubmit: async ({ apellido }) => {
      const capitalizeLastName = `${apellido[0].toUpperCase()}${apellido.slice(
        1,
        apellido.length
      )}`;

      const findClientByLastName = await fetch(
        `https://asociation-copy-api.vercel.app/api/clients/lastName/${apellido}`
      );

      if (findClientByLastName.status === 200) {
        setSpreadsheet(await findClientByLastName.json());
      } else {
        Swal.fire("Error", "No existe cliente con ese apellido", "error");
      }

      resetLastName();
    },
    validationSchema: Yup.object({
      apellido: Yup.string().required("Apellido es requerido"),
    }),
  });
  return (
    <Box sx={{ minHeight: "85vh", bgcolor: "#08282b", paddingBottom: "80px" }}>
      <Box sx={{ display: "flex", mx: 5 }}>
        <Link
          to="/spreadsheet"
          style={{
            textDecoration: "none",
            fontSize: 28,
            marginTop: 12,

            color: "white",
            fontWeight: "bold",
            marginLeft: 11,
          }}
        >
          {"< Planillas"}
        </Link>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginInline: 8,
          fontSize: { xs: 23, sm: 28, md: 35 },
          color: "white",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          name="dni"
          label="Buscar por DNI"
          variant="filled"
          component={"div"}
          value={values.dni}
          color="grey"
          theme={theme}
          onChange={handleChange}
          error={errors.dni ? true : false}
          helperText={errors.dni}
          sx={{
            backgroundColor: "lighter",
            borderRadius: 1,
            ":hover": {
              ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                color: "black",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiFilledInput-root": {
              color: "white",
              textColor: "red",
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          theme={theme}
          sx={{
            backgroundColor: "lighter",
            mx: 5,
            fontSize: { xs: 14, xl: 16 },
            ":hover": { backgroundColor: "#a2ede6" },
          }}
        >
          Enviar
        </Button>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          marginTop: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginInline: 8,
          fontSize: { xs: 23, sm: 28, md: 35 },
          color: "white",
        }}
        component="form"
        onSubmit={submitLastName}
      >
        <TextField
          name="apellido"
          label="Buscar por Apellido"
          variant="filled"
          component={"div"}
          value={valuesLastName.apellido}
          color="grey"
          theme={theme}
          onChange={changeLastName}
          error={errorsLastName.apellido ? true : false}
          helperText={errorsLastName.apellido}
          sx={{
            backgroundColor: "lighter",
            borderRadius: 1,
            ":hover": {
              ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                color: "black",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiFilledInput-root": {
              color: "white",
              textColor: "red",
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          theme={theme}
          sx={{
            backgroundColor: "lighter",
            mx: 5,
            fontSize: { xs: 14, xl: 16 },
            ":hover": { backgroundColor: "#a2ede6" },
          }}
        >
          Enviar
        </Button>
      </Box>
      {spreadsheet?.length !== 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: innerWidth < 1300 ? "start" : "center",
            marginTop: 10,
            overflow: "auto",
            marginBottom: 8,
            marginInline: 1,
            color: "white",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              DNI
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      paddingX: 1,
                      height: 144,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.dni}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Nombre
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.nombre}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Apellido
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.apellido}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Grupo Familiar
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.grupoFamiliar}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Dirección
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.direccion != "" ? client.direccion : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Teléfono
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.telefono != "" ? client.telefono : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Mercaderias
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.mercaderias != "" ? client.mercaderias : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", height: "100%" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Prendas
            </Box>

            <Box
              sx={{
                fontSize: { lg: 12, xl: 14 },
              }}
            >
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 2,
                    }}
                    key={client._id}
                  >
                    {client.prendas != "" ? client.prendas : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Zapatillas
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.zapatillas != "" ? client.zapatillas : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Microcrédito
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.microCredito != "" ? client.microCredito : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              N° Cuota
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 144,
                    }}
                    key={client._id}
                  >
                    {client.numeroCuota != "" ? client.numeroCuota : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
              }}
            >
              Comentarios
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={client._id}
                  >
                    {client.otros != "" ? client.otros : "-"}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
                fontWeight: "bold",
                border: "2px solid black",
                borderBottom: "2px solid black",
                padding: 1,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Fecha
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
              {spreadsheet.map((client) => {
                return (
                  <Box key={client._id}>
                    <Box
                      sx={{
                        borderInline: "2px solid black",
                        borderTop: "1px solid black",
                        borderBottom: "3px solid black",
                        padding: 2,
                        height: 144,
                        width: 73.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {`${client.fecha[8]}${client.fecha[9]}${client.fecha[7]}${client.fecha[5]}${client.fecha[6]}`}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
