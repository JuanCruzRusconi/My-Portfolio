import { FormattedMessage } from "react-intl";
import LandingPage from "../../assets/HTML-CSS.webp";
import JavaScript from "../../assets/JavaScript.jpeg";
import React from "../../assets/React.png"
import RestAPI from "../../assets/RestAPI.png";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Projects from "../../projects.json"

import "./ProjectsContainer.css";

const ProjectsContainer = () => {

    let title = "PROJECTS."
    let subtitle = "These are my personal recent projects."

    return (
        
        <>
            <Title 
                title={
                    <FormattedMessage 
                        id="title.projects.first"
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.projects.second"
                    />
                }
            />
            <div className="projects-container">
                <div className="projects-cards-container">
                    { Projects.map(project => <Card key={project.id} project={project} /> ) }
                </div>
            </div>
        </>

    )
}

export default ProjectsContainer;
