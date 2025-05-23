import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Type assertion to ensure container is not null
const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

