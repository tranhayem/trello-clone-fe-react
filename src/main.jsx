import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
