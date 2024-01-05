// NavbarItem.jsx
import React from "react";

function NavbarItem({ link, text, onClick, children }) {
    const handleClick = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick();
        }
    };

    return (
        <li className="nav-item">
            {link ? (
                <a className="nav-link active" href={link} onClick={handleClick}>
                    {text}
                </a>
            ) : (
                <div className="nav-link" onClick={handleClick}>
                    {text}
                </div>
            )}
            {children && <div className="submenu-container">{children}</div>}
        </li>
    );
}

export default NavbarItem;

