import { FormattedMessage } from "react-intl";
import Title from "../Title/Title";
import aboutImage from "../../assets/aboutImage.png";

import "./About.css";

const About = () => {

    let title = "ABOUT.";
    let subtitle = "Let me introduce myself ...";

    return (

        <div>
            <Title 
                title={
                    <FormattedMessage 
                        id="title.about.first"
                        defaultMessage={title}
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.about.second"
                        defaultMessage={subtitle}
                    />
                }
            />
            <div className="about-text-container">
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.first"
                        defaultMessage="I consider myself a proactive, orderly and responsible person, curious, which guarantees me to keep growing constantly."
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.second"
                        defaultMessage="A little about me, two years ago I discover the world of IT and and I got passionate. To be more specific, the world of programming and web development."
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.third"
                        defaultMessage="I completed courses in these areas, oriented in MERN Stack, including e-commerce projects for FrontEnd and the develop of an RESTful API created for BackEnd, with the implementation of some third party libraries to get more functionality in my projects."
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.fourth"
                        defaultMessage="The discover of this new passion brought me to reinvent myself and begin new stage in my life. Today I'm passing a career of Computer Science in National University, while I continue training myself in a self-taught way so as not to miss out on the advances that characterize the technological field."
                    />
                </p>
                <p className="about-text">
                    <FormattedMessage 
                        id="about.text.fifth"
                        defaultMessage="Looking forward to start my professional career to allow myself to gain experience and expand my knowledge, as well as learn new skills and technologies to stay up to date with new and future trends."
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