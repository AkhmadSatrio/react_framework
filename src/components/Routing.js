import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Kategory from '../pages/Kategory';
import Produk from '../pages/Product';
import Contact from "../pages/contact";
import Add from "../pages/produk/Add";

function Routing() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Kategory" element={<Kategory />} />
      <Route path="/Product" element={<Produk />} />
      <Route path="/produk/add" element={<Add />} />
      <Route path="/Contact" element={<Contact/>} />
   </Routes>
    );
}
export default Routing;