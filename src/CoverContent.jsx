// CoverContent
import React from "react";
import './css/coverContent.css';


function CoverContent({content}) {
    
    const coverStyle = {
        color: `${content.color}`
    };

    return (
        <div className="fondo-inicio-texto" style={coverStyle}>
            <div className="fondo-inicio-texto-menu">
                JOYERÍA / {content.menu}
            </div>
            <div className="fondo-inicio-texto-categoria">
                {content.menu}
            </div>
            <div className="fondo-inicio-texto-descripcion">
                {content.text}
            </div>
        </div>
    );
}

export default CoverContent;