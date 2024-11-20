import "./main.css";
import "react-calendar/dist/Calendar.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
