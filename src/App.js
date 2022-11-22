import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Adduser from "./components/useFromHoosUsingBestWay/BustWayInReact";
import UseFrom from "./components/UseFromHooks/UseFrom";
import Eastway from "./components/UseFromNoraml/Eastway";
import Govtfrom from "./components/GovtmentFromdesing/Govtfrom";

function App() {
  return (
   <div>
   <Govtfrom/>
   </div>
  );
}

export default App;
// <BrowserRouter>
// <Routes>
//   <Route path="/">
//     <Route index element={<Adduser />} />
//     <Route path="/add" element={<Adduser />} />
//     <Route path="/add" element={<Home />} />
//   </Route>
// </Routes>
// </BrowserRouter>