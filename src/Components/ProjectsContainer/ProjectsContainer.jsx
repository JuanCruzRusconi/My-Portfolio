import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import homeLogo from "../../assets/homeLogo.jpg";
import Card from "../Card/Card";

import "./ProjectsContainer.css";
import Title from "../Title/Title";

let projectsObj = [
    { id: 0, image: homeLogo, title: "Landing Page", text: "This is a project ... uguhsu ghogo ig owo itnoet wngoitn nvitivito oivte", link: "https://github.com/JuanCruzRusconi?tab=repositories" },
    { id: 1, image: homeLogo, title: "JS Ecommerce", text: "This is a project ... uguhsu ghogo ig owo itnoet wngoitn nvitivito oivte", link: "https://github.com/JuanCruzRusconi?tab=repositories" },
    { id: 2, image: homeLogo, title: "React Ecommerce", text: "This is a project ... uguhsu ghogo ig owo itnoet wngoitn nvitivito oivte", link: "https://github.com/JuanCruzRusconi?tab=repositories" },
    { id: 3, image: homeLogo, title: "BackEnd Ecommerce", text: "This is a project ... uguhsu ghogo ig owo itnoet wngoitn nvitivito oivte", link: "https://github.com/JuanCruzRusconi?tab=repositories" }
]

const ProjectsContainer = () => {

    let title = "My projects."
    let subtitle = "These are my personal recent projects."

    

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <div className="projects-container">
                <div className="projects-cards-container">
                    { projectsObj.map(project => <Card key={project.id} project={project} /> ) }
                </div>
            </div>
        </>

    )
}

export default ProjectsContainer;

/*
<div className="projects-container">
                <div className="projects-cards-container">
                    <div className="card">
                        <img className="project-image" src={homeLogo} alt="" />
                        <h3 className="project-title">Project name</h3>
                        <p className="project-text">This is a project ... uguhsu ghogo ig owo itnoet wngoitn nvitivito oivte</p>
                        <NavLink className="project-button-navlink" to="https://github.com/JuanCruzRusconi?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">To Project</button>
                        </NavLink>
                    </div>
                    <div className="card">
                        <img className="project-image" src={homeLogo} alt="" />
                        <h3 className="project-title">Project name</h3>
                        <p className="project-text">This is a project ...</p>
                        <NavLink className="project-button-navlink" to="https://github.com/JuanCruzRusconi?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">To Project</button>
                        </NavLink>
                    </div>
                    <div className="card">
                        <img className="project-image" src={homeLogo} alt="" />
                        <h3 className="project-title">Project name</h3>
                        <p className="project-text">This is a project ...</p>
                        <NavLink className="project-button-navlink" to="https://github.com/JuanCruzRusconi?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">To Project</button>
                        </NavLink>
                    </div>
                    <div className="card">
                        <img className="project-image" src={homeLogo} alt="" />
                        <h3 className="project-title">Project name</h3>
                        <p className="project-text">This is a project ...</p>
                        <NavLink className="project-button-navlink" to="https://github.com/JuanCruzRusconi?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">To Project</button>
                        </NavLink>
                    </div>
                </div>
            </div>



<div className="card">
                <div></div>
            </div>
            <div className="card">
                <div></div>
            </div>
            <div className="card">
                <div></div>
            </div>
            <div className="card">
                <div></div>
            </div>


 <div className="projects-container">
            <div className="card-container-first">
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="card-container-second">
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
*/