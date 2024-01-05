// NavbarCliente.jsx
import React from "react";
import LoginSection from "./LoginSection";
import "./css/navbarCliente.css";

function NavbarCliente({ children }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="prueba">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">{children}</ul>
                </div>
                <div className="cuadro-logotipo">
                    <a className="logotipo" href="index.html">
                        Carito
                    </a>
                </div>
                <LoginSection />
            </div>
        </nav>
    );
}

export default NavbarCliente;
