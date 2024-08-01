import { memo, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

import "./Card.css";

const Card = memo (( {project} ) => {

    const { locale } = useContext(langContext);

    let buttonLive = "To project";
    let buttonRepo = "To project";

    return (

        <article key={project.id} className="card">
            <div className="project-image-container">
                <img className="project-image" src={project.image} alt="" />
            </div>
            <div className="project-description-container">
                <h3 className="project-title">{locale === 'en-us' ? project.title.en : project.title.es}</h3>
                <p className="project-text">{locale === 'en-us' ? project.text.en : project.text.es}</p>
                <p className="project-techs">{project.techs}</p>
                <div className="project-buttons-container">
                    <NavLink className="project-button-navlink" to={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="project-button">
                            <FormattedMessage
                                id="card.project.button.live"
                                defaultMessage={buttonLive}
                            />
                        </button>
                    </NavLink>
                    <NavLink className="project-button-navlink" to={project.repo} target="_blank" rel="noopener noreferrer">
                        <button className="project-button">
                            <FormattedMessage
                                id="card.project.button.repo"
                                defaultMessage={buttonRepo}
                            />
                        </button>
                    </NavLink>
                </div>
            </div>
        </article>
        
    )
})

export default Card;
