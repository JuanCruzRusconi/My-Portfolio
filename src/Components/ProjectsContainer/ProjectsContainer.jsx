import { FormattedMessage } from "react-intl";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Projects from "../../db/projects.json";

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
                        defaultMessage={title}
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.projects.second"
                        defaultMessage={subtitle}
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
