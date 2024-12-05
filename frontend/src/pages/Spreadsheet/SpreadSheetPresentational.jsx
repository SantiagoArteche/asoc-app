import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const months = [
  { name: "Enero", date: "0124" },
  { name: "Febrero", date: "0224" },
  { name: "Marzo", date: "0324" },
  { name: "Abril", date: "0424" },
  { name: "Mayo", date: "0524" },
  { name: "Junio", date: "0624" },
  { name: "Julio", date: "0724" },
  { name: "Agosto", date: "0824" },
  { name: "Septiembre", date: "0924" },
  { name: "Octubre", date: "1024" },
  { name: "Noviembre", date: "1124" },
  { name: "Diciembre", date: "1224" },
];

export const SpreadSheetPresentational = ({
  spreadsheet,
  date,
  year,
  onDateChange,
  onYearChange,
  onDeleteClient,
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    setClientToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (clientToDelete) {
      onDeleteClient(clientToDelete);
      setDeleteDialogOpen(false);
      setClientToDelete(null);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: 4,
        px: 2,
        m: 0,
      }}
    >
      <Box sx={{ maxWidth: "90vw", mx: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h5" color="white">
              {"< Registrar cliente"}
            </Typography>
          </Link>
          <Link to="/findClient" style={{ textDecoration: "none" }}>
            <Typography variant="h5" color="white">
              {"Buscar cliente >"}
            </Typography>
          </Link>
        </Box>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Button variant="contained" onClick={onYearChange} sx={{ mb: 2 }}>
            Cambiar Año De Las Planillas
          </Button>
          <Typography variant="h4" sx={{ color: "white", py: 2 }} gutterBottom>
            {year}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {months.map((month) => (
              <Button
                key={month.date}
                variant="contained"
                onClick={() => onDateChange(month.date)}
              >
                {month.name}
              </Button>
            ))}
          </Box>
        </Box>

        {spreadsheet.length === 0 ? (
          <Typography variant="h6" color="white" textAlign="center">
            Selecciona uno de los botones de arriba para traer la plantilla con
            su respectivo año y mes (Recuerda que los clientes se registran con
            la fecha del día actual)
          </Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="client table">
              <TableHead>
                <TableRow>
                  <TableCell>DNI</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Grupo Familiar</TableCell>
                  <TableCell>Dirección</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>Mercaderías</TableCell>
                  <TableCell>Prendas</TableCell>
                  <TableCell>Zapatillas</TableCell>
                  <TableCell>Microcrédito</TableCell>
                  <TableCell>N° Cuota</TableCell>
                  <TableCell>Comentarios</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {spreadsheet.map((client) => (
                  <TableRow key={client._id}>
                    <TableCell>{client.dni}</TableCell>
                    <TableCell>{client.nombre}</TableCell>
                    <TableCell>{client.apellido}</TableCell>
                    <TableCell>{client.grupoFamiliar}</TableCell>
                    <TableCell>{client.direccion || "-"}</TableCell>
                    <TableCell>{client.telefono || "-"}</TableCell>
                    <TableCell>{client.mercaderias || "-"}</TableCell>
                    <TableCell>{client.prendas || "-"}</TableCell>
                    <TableCell>{client.zapatillas || "-"}</TableCell>
                    <TableCell>{client.microCredito || "-"}</TableCell>
                    <TableCell>{client.numeroCuota || "-"}</TableCell>
                    <TableCell>{client.otros || "-"}</TableCell>
                    <TableCell>{`${client.fecha[8]}${client.fecha[9]}/${client.fecha[5]}${client.fecha[6]}`}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteClick(client._id)}
                      >
                        Borrar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>Confirmar Borrado</DialogTitle>
          <DialogContent>
            <Typography>
              ¿Estás seguro de que quieres borrar este cliente?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setDeleteDialogOpen(false)}
              sx={{ background: "white", color: "black" }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleDeleteConfirm}
              sx={{ background: "red", color: "white" }}
            >
              Borrar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};
