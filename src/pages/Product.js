import React from "react";
import { useNavigate } from "react-router-dom";

function Produk() {
    const  navigate  = useNavigate();

    function TambahData() {
        navigate('/produk/add');
    }
    return(
        <div>
            <button onClick={TambahData}>Tambah Produk</button>
            <h1>Produk</h1>
        </div>
    );
}

export default Produk;
