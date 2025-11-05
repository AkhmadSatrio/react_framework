import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import Kategory from './pages/Kategory';
import Produk from './pages/Product';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Kategory" element={<Kategory />} />
      <Route path="/Produk" element={<Produk />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
