import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#185457",
        padding: 3,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: { xs: 18, md: 22 },
        color: "white",
      }}
    >
      All Rights Reserved. 2023
    </Box>
  );
};
