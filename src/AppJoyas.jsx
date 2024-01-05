// AppJoyas.jsx
import React, { useState } from "react";
import NavbarCliente from "./NavbarCliente";
import NavbarItem from "./NavbarItem";
import Submenu from "./Submenu";
import Cover from "./Cover";
import CoverContent from "./CoverContent";
import ProductSection from "./ProductSection";
import ProductElement from "./ProductElement";

const navbarItemProps = [
    { text: "Inicio", link: "index.html" },
    { text: "Venta", link: "#.html", submenu: [{ category: "anillo", text: "Anillos" }, { category: "collar", text: "Collares" }, { category: "pendiente", text: "Pendientes" }, { category: "pulsera", text: "Pulseras" }] },
    { text: "Personalización", link: "personalizacion.html" },
    { text: "Nosotros", link: "#.html", submenu: [{ link: "contactenos.html", text: "Contáctanos" }, { link: "nosotrosh.html", text: "Nuestra Historia" }] },
    { text: "Mis Pedidos", link: "misPedidos.html" },
];

const coverContentProps = {
    anillo: { text: "Detalles esenciales en cualquier ocasión, los anillos siempre hacen presencia.", menu: "ANILLOS", img: "https://drive.google.com/uc?export=view&id=17-BJ7ajf2NjoaMI6KHDUp0Py-NM8iJwm", color: "#ffffff" },
    collar: { text: "Detalles esenciales en cualquier ocasión, los collares destacan tu estilo con gracia.", menu: "COLLARES", img: "https://drive.google.com/uc?export=view&id=1H-KMkE1wa90FRXf3ttYV3x5hlCXInC7y", color: "#ffffff" },
    pendiente: { text: "Piezas imprescindibles para todo momento, los aretes nunca deben faltar.", menu: "PENDIENTES", img: "https://drive.google.com/uc?export=view&id=1Q1E1t6jHo3rPbZDIlF2nAoEx_yMdYFyv", color: "black" },
    pulsera: { text: "Complementos esenciales en cada ocasión, los brazaletes, tu toque inconfundible.", menu: "PULSERAS & BRAZALETES", img: "https://drive.google.com/uc?export=view&id=1W6g36hgOnc9dhH4ymjlqRrbjDgWVtInU", color: "black" },
};

function AppJoyas() {
    const [selectedCategory, setSelectedCategory] = useState("anillo");

    const handleCategoryChange = (category) => {
        console.log("Cambiando a la categoría:", category);
        setSelectedCategory(category);
    };


    console.log("Renderizando con la categoría:", selectedCategory);

    return (
        <>
            <NavbarCliente>
                {navbarItemProps.map((item, index) => (
                    <NavbarItem
                        key={index}
                        link={item.submenu?.category}
                        text={item.text}
                        onClick={() => handleCategoryChange(item.submenu?.category)}
                    >
                        {item.submenu && <Submenu categories={item.submenu} onClick={(category) => handleCategoryChange(category)} />}
                    </NavbarItem>
                ))}
            </NavbarCliente>
            <Cover imgCover={coverContentProps[selectedCategory].img}>
                <CoverContent content={coverContentProps[selectedCategory]} />
            </Cover>
            <ProductSection tipo={selectedCategory}>
                {
                    <ProductElement/>
                }
            </ProductSection>
        </>
    );
}


export default AppJoyas;
