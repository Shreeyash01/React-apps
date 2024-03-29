import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import Form from "./components/Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <Form /> */}
  </StrictMode>
);
