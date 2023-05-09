import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import theme from "./theme";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

const root = createRoot(rootEl);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
