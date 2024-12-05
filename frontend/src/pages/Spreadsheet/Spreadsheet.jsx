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
  const [date, setDate] = useState("1223");
  const [year, setYear] = useState("2023");
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
          const clientDate = `${client.fecha[5]}${client.fecha[6]}${client.fecha[2]}${client.fecha[3]}`;
          return clientDate === date;
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
    setYear((prev) => (prev === "2023" ? "2024" : "2023"));
    setDate((prev) => (prev === "1223" ? "0124" : "1223"));
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
