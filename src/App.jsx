import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";

import axios from "axios";
import FooterComponent from "./components/FooterComponent";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
