import { NavLink } from "react-router-dom";
import Title from "../Title/Title";
import aboutImage from "../../assets/aboutImage.png";
import aboutImage2 from "../../assets/aboutImage2.png"

import "./About.css";

const About = () => {

    let title = "ABOUT.";
    let subtitle = "Let me introduce myself ..."
    let text = "";

    return (
        <div>
            <Title title={title} subtitle={subtitle} />
            <div className="aboutMe-text-container">
                <p className="aboutMe-text">I consider myself a proactive, orderly and responsible person, curious, which guarantees me to keep growing constantly.</p>
                <p className="aboutMe-text">A little about me, two years ago I discover the world of IT and and I got passionate. To be more specific, the world of programming and web development.</p>
                <p className="aboutMe-text">I completed courses in that areas, oriented in MERN Stack, including e-commerce projects for FrontEnd and the develop of an RESTful API created for BackEnd, with the implementation of some third party libraries to get more functionality in my projects.</p> 
                <p className="aboutMe-text">The discover of this new passion brought me to reinvent myself and begin new stage in my life. Today I'm passing a career of Computer Science in National University, while I continue training myself in a self-taught way so as not to miss out on the advances that characterize the technological field.</p>
                <p className="aboutMe-text">I look forward to start my professional career to allow myself to gain experience and expand my knowledge, as well as learn new skills and technologies to stay up to date with new and future trends.</p>
            </div>
            <div className="about-image-container">
                <img className="about-image" src={aboutImage} alt="aboutImage" />
            </div>
        </div>
    )
}

export default About;

// including JavaScript as languaje with React framework for FrontEnd, and the develop of an RESTful API created with NodeJS and ExpressJS for BackEnd, with the implementation of some third party libraries to get more functionality in my projects.</p> 