import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import homeLogo from "../../assets/homeLogo.jpg";
import LandingPage from "../../assets/HTML-CSS.webp";
import JavaScript from "../../assets/JavaScript.jpeg";
import React from "../../assets/React.png"
import RestApi from "../../assets/RestApi.svg";
import RestAPI from "../../assets/RestAPI.png";
import Card from "../Card/Card";

import "./ProjectsContainer.css";
import Title from "../Title/Title";

let projectsObj = [
    { id: 0, image: LandingPage, title: "Landing Page", text: "My first project, an introduction to myself as a programmer. In this site I triyed to create a simple landing page of a family company, with the knowedge that I had at these moment, without funcionalities.", link: "https://electricidad-rusconi.netlify.app/" },
    { id: 1, image: JavaScript, title: "JS Ecommerce", text: "The second project, an e-commerce of tech products in which I introduce my firsts steps in JS language, with simple functionalities as add to cart products and delete it from it.", link: "https://usaimports.netlify.app/" },
    { id: 2, image: React, title: "React Ecommerce", text: "In the third project, a more advandecd e-commerce with mayor funcionalities created with React and Firestore used as cloud DB to manipulate all data of the products and there stock.", link: "https://e-commerce-project-reactjs.netlify.app" },
    { id: 3, image: RestAPI, title: "BackEnd Ecommerce", text: "The fourth project, a RESTful API constructed in NodeJS and ExpressJS with MongoDB for storage, and implementation of design patterns as Singleton, Factory and Repository, and libraries as Handlebars for views.", link: "https://github.com/JuanCruzRusconi?tab=repositories" }
]

const ProjectsContainer = () => {

    let title = "PROJECTS."
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