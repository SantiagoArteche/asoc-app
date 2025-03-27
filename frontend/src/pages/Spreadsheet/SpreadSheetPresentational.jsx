import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ClientTable } from "../../components/ClientTable";

export const SpreadSheetPresentational = ({
  spreadsheet,
  date,
  year,
  onDateChange,
  onYearChange,
  onDeleteClient,
}) => {
  const months = [
    { name: "Enero", date: "1/" + year },
    { name: "Febrero", date: "2/" + year },
    { name: "Marzo", date: "3/" + year },
    { name: "Abril", date: "4/" + year },
    { name: "Mayo", date: "5/" + year },
    { name: "Junio", date: "6/" + year },
    { name: "Julio", date: "7/" + year },
    { name: "Agosto", date: "8/" + year },
    { name: "Septiembre", date: "9/" + year },
    { name: "Octubre", date: "10/" + year },
    { name: "Noviembre", date: "11/" + year },
    { name: "Diciembre", date: "12" + year },
  ];

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
          <ClientTable
            spreadsheet={spreadsheet}
            handleDeleteClick={handleDeleteClick}
          />
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
