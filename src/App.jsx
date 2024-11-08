/* Stylesheets imports */
import "./App.css";

/* Components imports */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import Program from "./pages/Program/Program.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/programme" element={<Program />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
