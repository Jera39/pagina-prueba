//ProductSection.jsx
import React, { useEffect, useState } from "react";
import "./css/productSection.css";

function ProductSection({ child, tipo }) {
    const [joyas, setJoyas] = useState([]);

    useEffect(() => {
        // Obtener las joyas desde el servidor
        fetch(`http://localhost:8080/api/carito/joyas/tipo/${tipo}`)
            .then(response => response.json())
            .then(joyasData => {
                setJoyas(joyasData);
            })
            .catch(error => console.error('Error al obtener joyas:', error));
    }, []);

    return (
        <div className="contenido">
            <div className="content-muestra" id="joyas-container">
                {joyas.map(joya => (
                    <div className="muestra" key={joya.id}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProductSection;