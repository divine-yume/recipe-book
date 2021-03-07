import React from "react";

import './Ingredient.css';

const ingredient = (props) => {
    return (
        <div>
            <button>{props.ingredient}</button>
        </div>
    )
}

export default ingredient;