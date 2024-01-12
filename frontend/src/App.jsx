import "./App.css";
import { RegisterClient } from "./components/RegisterClient/RegisterClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Spreadsheet } from "./components/Spreadsheet/Spreadsheet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<RegisterClient />} />
            <Route path="/spreadsheet" element={<Spreadsheet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
