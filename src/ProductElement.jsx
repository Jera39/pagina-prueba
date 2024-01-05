//ProductElement.jsx
import React from "react";
import ProductSection from "./ProductSection";

function ProductElement({ id, imagen, nombre, precio, descripcion, medida, stock }) {
    return (
        <a href="venta.html" >
            <div id={id} className="muestra-content">
                <div className="muestra-imagen">
                    <img src={`https://drive.google.com/uc?export=view&id=${imagen}`} alt="" />
                </div>
                <div className="muestra-nombre">{nombre}</div>
                <div className="muestra-precio">{precio}</div>
                <div className="muestra-descripcion">{descripcion}</div>
                <div className="muestra-medida">{medida}</div>
                <div className="muestra-stock">{stock}</div>
            </div>
        </a>
    )
};

export default ProductElement;

// onClick={guardarInformacionProducto(this)}