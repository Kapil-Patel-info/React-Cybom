// main.jsx or index.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UseContext from "./UseContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById("root")).render(
  <UseContext>
    <App />
  </UseContext>
);
