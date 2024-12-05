import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { ClientTable } from "../../components/ClientTable";

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

export const FindClient = () => {
  const [spreadsheet, setSpreadsheet] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonTextFieldStyles = {
    backgroundColor: "#1a8587",
    borderRadius: 1,
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiFilledInput-root": { color: "white" },
    ":hover .MuiInputLabel-root": { color: "black" },
  };

  const formikDni = useFormik({
    initialValues: { dni: "" },
    validationSchema: Yup.object({
      dni: Yup.string().required("DNI es requerido"),
    }),
    onSubmit: async ({ dni }, { resetForm }) => {
      try {
        const response = await fetch(
          `https://asociation-copy-api.vercel.app/api/clients/dni/${dni}`
        );
        if (response.ok) {
          setSpreadsheet(await response.json());
        } else {
          Swal.fire("Error", "No existe cliente con ese DNI", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Ocurrió un problema al buscar", "error");
      }
      resetForm();
    },
  });

  const formikLastName = useFormik({
    initialValues: { apellido: "" },
    validationSchema: Yup.object({
      apellido: Yup.string().required("Apellido es requerido"),
    }),
    onSubmit: async ({ apellido }, { resetForm }) => {
      try {
        const formattedLastName =
          apellido.charAt(0).toUpperCase() + apellido.slice(1);
        const response = await fetch(
          `https://asociation-copy-api.vercel.app/api/clients/lastName/${formattedLastName}`
        );
        if (response.ok) {
          setSpreadsheet(await response.json());
        } else {
          Swal.fire("Error", "No existe cliente con ese apellido", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Ocurrió un problema al buscar", "error");
      }
      resetForm();
    },
  });

  const handleClearResults = () => {
    setSpreadsheet([]);
    setDialogOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#08282b",
          py: 4,
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: "90vw", mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Link to="/spreadsheet" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color="white">
                {"< Planillas"}
              </Typography>
            </Link>
          </Box>

          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" color="white" gutterBottom>
              Buscar Cliente
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              Ingresa DNI o Apellido para buscar un cliente.
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={formikDni.handleSubmit}
            sx={{ display: "flex", justifyContent: "center", mb: 4 }}
          >
            <TextField
              name="dni"
              label="Buscar por DNI"
              variant="filled"
              value={formikDni.values.dni}
              onChange={formikDni.handleChange}
              error={!!formikDni.errors.dni}
              helperText={formikDni.errors.dni}
              sx={commonTextFieldStyles}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: "#1a8587",
                ":hover": { bgcolor: "#0d5a5b" },
              }}
            >
              Buscar
            </Button>
          </Box>
          <Box
            component="form"
            onSubmit={formikLastName.handleSubmit}
            sx={{ display: "flex", justifyContent: "center", mb: 4 }}
          >
            <TextField
              name="apellido"
              label="Buscar por Apellido"
              variant="filled"
              value={formikLastName.values.apellido}
              onChange={formikLastName.handleChange}
              error={!!formikLastName.errors.apellido}
              helperText={formikLastName.errors.apellido}
              sx={commonTextFieldStyles}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: "#1a8587",
                ":hover": { bgcolor: "#0d5a5b" },
              }}
            >
              Buscar
            </Button>
          </Box>

          {spreadsheet.length > 0 && (
            <Box>
              <ClientTable spreadsheet={spreadsheet} />
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={() => setDialogOpen(true)}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    ":hover": { bgcolor: "#b22222" },
                  }}
                >
                  Limpiar Resultados
                </Button>
              </Box>
            </Box>
          )}

          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Confirmar Acción</DialogTitle>
            <DialogContent>
              <Typography>
                ¿Estás seguro de que quieres limpiar los resultados?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setDialogOpen(false)}
                sx={{ color: "black", background: "white" }}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleClearResults}
                color="error"
                sx={{ background: "red", color: "white" }}
              >
                Limpiar
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
