import React from "react";

import './Recipe.css';

const recipe = (props) => {
    return (
        <div className="Recipe">
            <img alt="Not found" src={props.img} />
            <div className="Desc">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default recipe;