import { FormattedMessage } from "react-intl";
import Title from "../Title/Title";
import aboutImage from "../../assets/aboutImage.png";

import "./About.css";

const About = () => {

    let title = 'en-us' ? "ABOUT." : "SOBRE";
    let subtitle = "Let me introduce myself ..."
    let text = "";

    return (

        <div>
            <Title 
                title={
                    <FormattedMessage 
                        id="title.about.first"
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.about.second"
                    />
                }
            />
            <div className="about-text-container">
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.first"
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.second"
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.third"
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.fourth"
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.fifth"
                    />
                </p>
            </div>
            <div className="about-image-container">
                <img className="about-image" src={aboutImage} alt="aboutImage" />
            </div>
        </div>

    )
}

export default About;
//<Title title={title} subtitle={subtitle} />