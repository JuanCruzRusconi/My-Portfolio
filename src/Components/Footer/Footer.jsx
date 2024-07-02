import { NavLink } from "react-router-dom";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";

import "./Footer.css";

const Footer = () => {

    return (
        
        <div className="footer-container">
            <div className="footer-icons-container">
                <NavLink to="https://www.linkedin.com/in/juan-cruz-rusconi/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={linkedinIcon} alt="linkedin" />
                </NavLink>
                <span className="footer-icons"></span>
                <NavLink to="https://github.com/JuanCruzRusconi?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={githubIcon} alt="github" />
                </NavLink>
            </div>
            <div className="copyright-container">
                <div className="copyright-signature">
                    <p className="copyright-text">Designed and developed by Juan Cruz Rusconi.</p>
                </div>
                <div className="copyright">
                    <p className="copyright-text">© Copyright 2024.  JCR.</p>
                </div>
                <div className="copyright-icons">
                    <p className="copyright-text"></p>
                </div>
            </div>
        </div>

    )
}

export default Footer;