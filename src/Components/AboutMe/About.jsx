import { NavLink } from "react-router-dom";
import Title from "../Title/Title";
import aboutImage from "../../assets/aboutImage.png";
import aboutImage2 from "../../assets/aboutImage2.png"

import "./About.css";

const About = () => {

    let title = "About me.";
    let subtitle = "Let me introduce myself ..."
    let text = "";

    return (
        <div>
            <Title title={title} subtitle={subtitle} />
            <div className="aboutMe-text-container">
                <p className="aboutMe-text">I consider myself a proactive, orderly and responsible person, curious, which guarantees me to keep growing constantly.</p>
                <p className="aboutMe-text">I am looking for a position that allows me togain experience and expand my knowledge, along with learning new skills and technologies that make it easier to keep up to date with new and future trends</p>
            </div>
            <div className="about-image-container">
                <img className="about-image" src={aboutImage} alt="aboutImage" />
            </div>
        </div>
    )
}

export default About;