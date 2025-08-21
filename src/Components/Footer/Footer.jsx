import { NavLink } from "react-router-dom";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import whatsappIcon from "../../assets/whatsappIcon.png";

import "./Footer.css";

const Footer = () => {

    return (
        
        <footer className="footer-container">
            <div className="footer-icons-container">
                <NavLink to="https://www.linkedin.com/in/juan-cruz-rusconi/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={linkedinIcon} alt="linkedin" />
                </NavLink>

                <NavLink to="https://github.com/JuanCruzRusconi?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={githubIcon} alt="github" />
                </NavLink>
                <NavLink to="https://wa.me/+5492215977998?text=Hola%20Juan%20Cruz!%20Te%20escribo%20a%20través%20de%20tu%20portfolio%20web." target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={whatsappIcon} alt="github" />
                </NavLink>
            </div>
            <div className="copyright-container">
                <div className="copyright-signature">
                    <p className="copyright-text">Designed and developed by Juan Cruz Rusconi.</p>
                </div>
                <div className="copyright">
                    <p className="copyright-text">© Copyright 2025.  JCR.</p>
                </div>
                <div className="copyright-icons">
                    <p className="copyright-text"></p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;