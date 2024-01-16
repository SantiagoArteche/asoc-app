import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SpreadSheetPresentacional } from "./SpreadSheetPresentacional";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import "./spreadsheet.css";
export const Spreadsheet = () => {
  const [date, setDate] = useState("1223");
  const [component, setComponent] = useState("");
  const [componentB, setComponentB] = useState("none");
  const [spreadsheet, setSpreadsheet] = useState([]);
  const [erase, setErase] = useState(false);

  useEffect(() => {
    fetch("https://asociation-copy-api.vercel.app/api/clients")
      .then((res) => res.json())
      .then((data) => {
        let clients = data.message.map((el) => {
          return {
            ...el,
          };
        });
        const filter = clients.filter((el) => {
          return (
            `${el.fecha[5]}${el.fecha[6]}${el.fecha[2]}${el.fecha[3]}` == date
          );
        });
        setSpreadsheet(filter);
      });
    erase;
  }, [date, erase]);

  return (
    <SpreadSheetPresentacional
      Link={Link}
      Box={Box}
      Button={Button}
      component={component}
      setComponent={setComponent}
      componentB={componentB}
      setComponentB={setComponentB}
      setDate={setDate}
      spreadsheet={spreadsheet}
      CloseIcon={CloseIcon}
      DeleteForeverIcon={DeleteForeverIcon}
      setErase={setErase}
      erase={erase}
    />
  );
};
