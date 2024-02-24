import Title from "../Title/Title";
import homeLogo2 from "../../assets/homeLogo2.png";
import homeLogo3 from "../../assets/homeLogo3.png";
import homeLogo4 from "../../assets/homeLogo4.png";
import homeLogo5 from "../../assets/homeLogo5.png";
import homeLogo6 from "../../assets/homeLogo6.png";

import "./Me.css";

const Me = ({children}) => {

    return (
        <div className="me-container">
            <div className="me">
                <h2 className="me-intro">Hi! I'm</h2>
                <h1 className="me-name">Juan Cruz Rusconi,</h1>
                <h2 className="me-intro">Full Stack Developer.<strong className="inserction point">|</strong></h2>
                {children}
            </div>
            <div className="me-image">
                <img className="home-image" src={homeLogo5} alt="homeLogo" />
            </div>
        </div>
    )
}

export default Me;