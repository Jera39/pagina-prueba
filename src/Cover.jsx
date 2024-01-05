//Cover 
import React from "react";

function Cover({ children, imgCover }) {

    const coverStyle = {
        background: `url(${imgCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '80px'
    };

    return (
        <div className="fondo-inicio" style={coverStyle}>
            {children}
        </div>
    );
}

export default Cover;


// import coverImage from "./img/coverimg1.jpg";