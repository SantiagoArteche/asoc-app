import { Box, Typography } from "@mui/material";

export const ClientTable = ({ clients }) => {
  const columns = [
    { field: "dni", header: "DNI" },
    { field: "nombre", header: "Nombre" },
    { field: "apellido", header: "Apellido" },
    { field: "grupoFamiliar", header: "Grupo Familiar" },
    { field: "direccion", header: "Dirección" },
    { field: "telefono", header: "Teléfono" },
    { field: "mercaderias", header: "Mercaderias" },
    { field: "prendas", header: "Prendas" },
    { field: "zapatillas", header: "Zapatillas" },
    { field: "microCredito", header: "Microcrédito" },
    { field: "numeroCuota", header: "N° Cuota" },
    { field: "otros", header: "Comentarios" },
    { field: "fecha", header: "Fecha" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        my: 4,
        mx: 1,
        color: "common.white",
        "& > div": {
          minWidth: 150,
          borderRight: "1px solid rgba(255,255,255,0.1)",
        },
      }}
    >
      {columns.map(({ field, header }) => (
        <Box key={field} sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              p: 2,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}
          >
            {header}
          </Typography>
          {clients.map((client) => (
            <Box
              key={client._id}
              sx={{
                p: 2,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {field === "fecha"
                ? `${client.fecha[8]}${client.fecha[9]}/${client.fecha[5]}${client.fecha[6]}`
                : client || "-"}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};
