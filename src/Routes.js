import React from "react";
import Home from "./Home";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Dashboard from "./Dashboard";
import Catalogo from "./Catalogo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Catalogo" element={<Catalogo/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
