import { memo } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./Card.css";

const Card = memo (( {project} ) => {

    return (

        <div key={project.id} className="card">
            <img className="project-image" src={project.image} alt="" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-text">{project.text}</p>
            <NavLink className="project-button-navlink" to={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">
                    <FormattedMessage id="card.project-button"/>
                </button>
            </NavLink>
        </div>
        
    )
})

export default Card;
