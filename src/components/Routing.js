import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Kategory from '../pages/Kategory';
import Produk from '../pages/Product';
import Contact from "../pages/contact";

function Routing() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Kategory" element={<Kategory />} />
      <Route path="/Produk" element={<Produk />} />
      <Route path="/Contact" element={<Contact/>} />
   </Routes>
    );
}
export default Routing;