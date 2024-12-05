import { Box, Typography, IconButton, Paper } from "@mui/material";
import {
  Close as CloseIcon,
  DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";

export const DeleteDialog = ({ clients, visible, onClose, onDelete }) => {
  if (!visible) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "90%", sm: "600px" },
        maxHeight: "80vh",
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 3,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5">Borrar Cliente</Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      {clients.map((client) => (
        <Box
          key={client._id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            mb: 1,
            bgcolor: "background.default",
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography>{client.apellido}</Typography>
            <Typography>{client.dni}</Typography>
            <Typography>{`${client.fecha[8]}${client.fecha[9]}/${client.fecha[5]}${client.fecha[6]}`}</Typography>
          </Box>
          <IconButton onClick={() => onDelete(client._id)} color="error">
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      ))}
    </Paper>
  );
};
