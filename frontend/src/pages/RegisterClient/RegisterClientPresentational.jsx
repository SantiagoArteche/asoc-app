import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Input,
} from "@mui/material";
import { Link } from "react-router-dom";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "text.primary",
    },
    "&:hover fieldset": {
      borderColor: "text.primary",
    },
    "&.Mui-focused fieldset": {
      borderColor: "text.primary",
    },
  },
  "& .MuiInputLabel-root": {
    color: "text.secondary",
    "&.Mui-focused": {
      color: "text.primary",
    },
  },
  "& .MuiInputBase-input": {
    color: "text.secondary",
  },
};

export const RegisterClientPresentational = ({ formik }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "90vh",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "background.paper",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom color="text.secondary">
                  Información Personal
                </Typography>
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="dni"
                  name="dni"
                  label="DNI"
                  value={formik.values.dni}
                  onChange={formik.handleChange}
                  error={formik.touched.dni && Boolean(formik.errors.dni)}
                  helperText={formik.touched.dni && formik.errors.dni}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="nombre"
                  name="nombre"
                  label="Nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                  helperText={formik.touched.nombre && formik.errors.nombre}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="apellido"
                  name="apellido"
                  label="Apellido"
                  value={formik.values.apellido}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.apellido && Boolean(formik.errors.apellido)
                  }
                  helperText={formik.touched.apellido && formik.errors.apellido}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="grupoFamiliar"
                  name="grupoFamiliar"
                  label="Grupo Familiar"
                  value={formik.values.grupoFamiliar}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.grupoFamiliar &&
                    Boolean(formik.errors.grupoFamiliar)
                  }
                  helperText={
                    formik.touched.grupoFamiliar && formik.errors.grupoFamiliar
                  }
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="direccion"
                  name="direccion"
                  label="Dirección"
                  value={formik.values.direccion}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.direccion && Boolean(formik.errors.direccion)
                  }
                  helperText={
                    formik.touched.direccion && formik.errors.direccion
                  }
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="telefono"
                  name="telefono"
                  label="Teléfono"
                  value={formik.values.telefono}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.telefono && Boolean(formik.errors.telefono)
                  }
                  helperText={formik.touched.telefono && formik.errors.telefono}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom color="text.secondary">
                  Retira
                </Typography>
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="mercaderias"
                  name="mercaderias"
                  label="Mercaderías"
                  value={formik.values.mercaderias}
                  onChange={formik.handleChange}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="prendas"
                  name="prendas"
                  label="Prendas"
                  value={formik.values.prendas}
                  onChange={formik.handleChange}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="zapatillas"
                  name="zapatillas"
                  label="Zapatillas"
                  value={formik.values.zapatillas}
                  onChange={formik.handleChange}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="microCredito"
                  name="microCredito"
                  label="Micro Crédito"
                  value={formik.values.microCredito}
                  onChange={formik.handleChange}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="numeroCuota"
                  name="numeroCuota"
                  label="Número de Cuota"
                  value={formik.values.numeroCuota}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.numeroCuota &&
                    Boolean(formik.errors.numeroCuota)
                  }
                  helperText={
                    formik.touched.numeroCuota && formik.errors.numeroCuota
                  }
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom color="text.secondary">
                  Otros/Varios
                </Typography>
                <Input
                  fullWidth
                  id="otros"
                  name="otros"
                  placeholder="Comentarios..."
                  value={formik.values.otros}
                  onChange={formik.handleChange}
                  multiline
                  rows={4}
                  sx={{
                    ...inputStyle,
                    backgroundColor: "background.paper",
                    padding: 1,
                    borderRadius: 1,
                    border: 0.5,
                    borderColor: "secondary.main",
                    mt: 2,
                  }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => formik.resetForm()}
              >
                Restablecer
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Enviar
              </Button>
            </Box>
          </Box>
        </Paper>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/spreadsheet"
          >
            Ver Planillas
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
