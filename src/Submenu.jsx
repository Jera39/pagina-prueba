// Submenu.jsx
import React from "react";

function Submenu({ categories }) {
    return (
        <div className="submenu">
            <p>CATEGORÍAS:</p>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href={category.link || category}>
                            • {typeof category === "object" ? category.text : category.replace(/\.html$/, "")}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Submenu;
