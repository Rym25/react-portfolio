import React from "react";

function Nav() {
    const categories = [
        {name: "About Me"},
        {name: "Portfolio"},
        {name: "Contact"},
        {name: "Resume"}
     ]
    return (
        <nav>
            <ul className="flex-row">
                {categories.map((category) => (
                    <li key={category.name} className="li-m">
                        <span>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;