// AppJoyas.jsx
import React from "react";
import NavbarCliente from "./NavbarCliente";
import NavbarItem from "./NavbarItem";
import Submenu from "./Submenu";
import Cover from "./Cover";
import CoverContent from "./CoverContent";



const navbarItemProps = [
    { text: "Inicio", link: "index.html" },
    { text: "Venta", link: "#.html", submenu: [{ link: "anillos.html", text: "Anillos" }, { link: "collares.html", text: "Collares" }, { link: "pendientes.html", text: "Pendientes" }, { link: "pulseras.html", text: "Pulseras" }] },
    { text: "Personalización", link: "personalizacion.html" },
    { text: "Nosotros", link: "#.html", submenu: [{ link: "contactenos.html", text: "Contáctanos" }, { link: "nosotrosh.html", text: "Nuestra Historia" }] },
    { text: "Mis Pedidos", link: "misPedidos.html" },
];

const coverContentProps = {
    anillos: { text: "Detalles esenciales en cualquier ocasión, los anillos siempre hacen presencia.", menu: "ANILLOS", img: "https://drive.google.com/uc?export=view&id=17-BJ7ajf2NjoaMI6KHDUp0Py-NM8iJwm", color: "#ffffff" },
    collares: { text: "Detalles esenciales en cualquier ocasión, los collares destacan tu estilo con gracia.", menu: "COLLARES", img: "https://drive.google.com/uc?export=view&id=1H-KMkE1wa90FRXf3ttYV3x5hlCXInC7y", color: "#ffffff" },
    pendientes: { text: "Piezas imprescindibles para todo momento, los aretes nunca deben faltar.", menu: "PENDIENTES", img: "https://drive.google.com/uc?export=view&id=1Q1E1t6jHo3rPbZDIlF2nAoEx_yMdYFyv", color: "black" },
    pulseras: { text: "Complementos esenciales en cada ocasión, los brazaletes, tu toque inconfundible.", menu: "PULSERAS & BRAZALETES", img: "https://drive.google.com/uc?export=view&id=1W6g36hgOnc9dhH4ymjlqRrbjDgWVtInU", color: "black" },
};

const coverProps = { imgCover: 'https://drive.google.com/uc?export=view&id=1Q1E1t6jHo3rPbZDIlF2nAoEx_yMdYFyv' };

function AppJoyas() {
    const selectedCategory = "pulseras"; // Cambia esto según la categoría que quieras mostrar
    const selectedContent = coverContentProps[selectedCategory];

    return (
        <>
            <NavbarCliente>
                {navbarItemProps.map((item, index) => (
                    <NavbarItem key={index} link={item.link} text={item.text}>
                        {item.submenu && <Submenu categories={item.submenu} />}
                    </NavbarItem>
                ))}
            </NavbarCliente>
            <Cover imgCover={selectedContent.img}>
                {<CoverContent content={selectedContent} />}
            </Cover>
        </>
    );
}

export default AppJoyas;
