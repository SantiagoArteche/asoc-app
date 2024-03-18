import { FindClient } from "./pages/FindClient/FindClient";
import { RegisterClient } from "./pages/RegisterClient/RegisterClient";
import { Spreadsheet } from "./pages/Spreadsheet/Spreadsheet";

export const routes = [
  { Element: RegisterClient, path: "/", id: "Register Client" },
  {
    Element: Spreadsheet,
    path: "/spreadsheet",
    id: "Spreadsheet",
  },
  {
    Element: FindClient,
    path: "/findClient",
    id: "FindClient",
  },
];
