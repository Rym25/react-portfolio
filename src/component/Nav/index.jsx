import React from "react";

function Nav(props) {
    
    const {
        categories,
        setCurrentCategory,
        currentCategory
      } = props;

    return (
        <nav>
            <ul className="flex-row">
                {categories.map((cat) => (
                    <li key={cat.name} className={`li-m ${currentCategory.name === cat.name && 'font-weight-bold'}`}>
                        <span onClick={() => {
                            setCurrentCategory(cat.name);
                        }}>
                            {cat.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;