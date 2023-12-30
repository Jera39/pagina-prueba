// AppIndex.jsx
import React from "react";
import NavbarCliente from "./NavbarCliente";
import NavbarItem from "./NavbarItem";
import Submenu from "./Submenu";

const navbarItemProps = [
    { text: "Inicio", link: "index.html" },
    { text: "Venta", link: "#.html", submenu: [{ link: "pendientes.html", text: "Pendientes" }, { link: "anillos.html", text: "Anillos" }, { link: "collares.html", text: "Collares" }, { link: "pulseras.html", text: "Pulseras" }] },
    { text: "Personalización", link: "personalizacion.html" },
    { text: "Nosotros", link: "#.html", submenu: [{ link: "contactenos.html", text: "Contáctanos" }, { link: "nosotrosh.html", text: "Nuestra Historia" }] },
    { text: "Mis Pedidos", link: "misPedidos.html" },
];

function AppIndex() {
    return (
        <>
            <NavbarCliente>
                {navbarItemProps.map((item, index) => (
                    <NavbarItem key={index} link={item.link} text={item.text}>
                        {item.submenu && <Submenu categories={item.submenu} />}
                    </NavbarItem>
                ))}
            </NavbarCliente>
        </>
    );
}

export default AppIndex;
