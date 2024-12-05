import { Button } from "@mui/material";

export const MonthButton = ({ month, date, onDateChange, ...props }) => {
  return (
    <Button
      variant="contained"
      onClick={() => onDateChange(date)}
      sx={{
        fontSize: { xs: 10, md: 12, lg: 13 },
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "secondary.main",
          color: "common.black",
        },
      }}
      {...props}
    >
      {month}
    </Button>
  );
};
