// NavbarItem.jsx
import React from "react";

function NavbarItem({ link, text, children }) {
    return (
        <li className="nav-item">
            <a className="nav-link active" href={link}>
                {text}
            </a>
            {children && <div className="submenu-container">{children}</div>}
        </li>
    );
}

export default NavbarItem;
