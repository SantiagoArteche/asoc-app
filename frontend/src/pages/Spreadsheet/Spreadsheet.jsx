import React, { useState, useEffect } from "react";
import { SpreadSheetPresentational } from "./SpreadSheetPresentational";
import { createTheme, ThemeProvider } from "@mui/material";

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

export const Spreadsheet = () => {
  const [date, setDate] = useState("1/2024");
  const [year, setYear] = useState("2024");
  const [spreadsheet, setSpreadsheet] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(
          "https://asociation-copy-api.vercel.app/api/clients"
        );
        const data = await response.json();

        const clients = data.message;
        const filtered = clients.filter((client) => {
          const clientDate = new Date(client.fecha).toLocaleString();
          const [formattedDate] = clientDate.split(",");
          const [_, month, year] = formattedDate.split("/");
          const finalDate = `${month}/${year}`;
          return finalDate == date;
        });

        setSpreadsheet(filtered);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setSpreadsheet([]);
      }
    };

    fetchClients();
  }, [date]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleYearChange = () => {
    setYear((prev) => (prev == "2024" ? "2025" : "2024"));
    setDate((prev) => (prev.endsWith("2024") ? "1/2025" : "1/2024"));
  };

  const handleDeleteClient = async (id) => {
    try {
      const response = await fetch(
        "https://asociation-copy-api.vercel.app/api/clients/deleteClient",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );

      if (response.ok) {
        setSpreadsheet((prev) => prev.filter((client) => client._id !== id));
      }
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SpreadSheetPresentational
        spreadsheet={spreadsheet}
        date={date}
        year={year}
        onDateChange={handleDateChange}
        onYearChange={handleYearChange}
        onDeleteClient={handleDeleteClient}
      />
    </ThemeProvider>
  );
};
