// LoginSection.jsx
import React, { useEffect } from "react";

function LoginSection() {
    useEffect(() => {
        const handleLogin = () => {
            var nombreUsuario = localStorage.getItem("nombreUsuario");
            var enlaceLogin = document.getElementById("enlaceLogin");
            var usuarioLogin = document.getElementById("usuarioLogin");
            var loginOptions = document.querySelector(".login-options");
            var cerrarSesionOption = document.getElementById("cerrarSesionOption");

            if (nombreUsuario) {
                usuarioLogin.textContent = " " + nombreUsuario;
            } else {
                usuarioLogin.textContent = " Loguearme";
                loginOptions.style.display = "none";
            }

            cerrarSesionOption.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.removeItem("nombreUsuario");
                localStorage.removeItem("idUsuario");
                loginOptions.style.display = "none";
                window.location.reload();
            });
        };

        document.addEventListener("DOMContentLoaded", handleLogin);

        return () => {
            document.removeEventListener("DOMContentLoaded", handleLogin);
        };
    }, []);

    return (
        <li className="d-flex" id="login">
            <div className="cuadro-login">
                <a href="login.html" id="enlaceLogin" className="nav-link active">
                    <svg viewBox="0 0 24 24" width="50px" height="50px" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="12" cy="6" r="4" fill="#000000"></circle>
                            <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" fill="#000000"></ellipse>
                        </g>
                    </svg>
                    <span id="usuarioLogin"></span>
                </a>
                <div className="login-options">
                    <ul>
                        <li>
                            <a href="perfilUsuario.html">• Perfil</a>
                        </li>
                        <li id="cerrarSesionOption">
                            <a href="#">• Cerrar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default LoginSection;
