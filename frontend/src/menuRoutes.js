import { RegisterClient } from "./components/RegisterClient/RegisterClient";
import { Spreadsheet } from "./components/Spreadsheet/Spreadsheet";

export const routes = [
  { Element: RegisterClient, path: "/", id: "Register Client" },
  {
    Element: Spreadsheet,
    path: "/spreadsheet",
    id: "Spreadsheet",
  },
];
