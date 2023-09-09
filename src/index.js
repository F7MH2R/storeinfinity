import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Contact from "./components/Contact";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<Error />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
