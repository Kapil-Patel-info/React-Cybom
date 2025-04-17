// main.jsx or index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Render the root component
createRoot(document.getElementById("root")).render(

    <App />

);
