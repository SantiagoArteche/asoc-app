import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const SearchField = ({ label, ...props }) => {
  const theme = useTheme();

  return (
    <TextField
      variant="filled"
      label={label}
      fullWidth
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 1,
        "& .MuiInputLabel-root": {
          color: "common.white",
        },
        "& .MuiFilledInput-root": {
          color: "common.white",
          "&:hover": {
            backgroundColor: "primary.light",
          },
          "&.Mui-focused": {
            backgroundColor: "primary.light",
          },
        },
        "& .MuiFormHelperText-root": {
          color: "error.main",
        },
      }}
      {...props}
    />
  );
};
