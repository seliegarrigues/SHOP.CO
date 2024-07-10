//src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import FicheProduit from "./pages/FicheProduit";
import Produits from "./pages/Produits";
import Panier from "./pages/Panier";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/FicheProduit" element={<FicheProduit />}></Route>
      <Route path="/Produits" element={<Produits />}></Route>
      <Route path="/Panier" element={<Panier />}></Route>
    </Routes>
  </BrowserRouter>
  )
}