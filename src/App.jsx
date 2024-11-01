import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Faq from "./pages/Faq/Faq.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
