import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Adduser from "./components/adduser/Adduser";
import UseFrom from "./components/UseFromHooks/UseFrom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<UseFrom />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/add" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
