import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export const ClientTable = ({ spreadsheet, handleDeleteClick }) => {
  return (
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
            {handleDeleteClick && <TableCell>Acciones</TableCell>}
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
              <TableCell>{`${client.fecha.slice(8, 10)}/${client.fecha.slice(
                5,
                7
              )}`}</TableCell>
              {handleDeleteClick && (
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteClick(client._id)}
                  >
                    Borrar
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
