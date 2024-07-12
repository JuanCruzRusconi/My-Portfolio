import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";
import { langContext } from "../../context/langContext";

import homeIcon from "../../assets/homeIcon.png";
import aboutIcon from "../../assets/aboutIcon.png";
import projectsIcon from "../../assets/projectsIcon.png"
import resumeIcon from "../../assets/resumeIcon.png";
import contactIcon from "../../assets/contactIcon.png";

import ukIcon from '../../assets/United-Kingdom.png';
import spIcon from '../../assets/Spain.png';

import "./NavBar.css";


const NavBar = () => {

    const languaje = useContext(langContext);

    return (

        <div className="navbar-container">
            <div className="section-logo-container">
                <NavLink className="navbar-items" to={'/'}>
                    <h2 className="navbar-logo">JCR.</h2>
                </NavLink>
            </div>
            <div className="sections-container">
                <NavLink className="navbar-items" to={'/'}>
                    <img className="navbar-icons" src={homeIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.home"
                            defaultMessage="HOME"
                        />
                    </h2>
                </NavLink>
                <NavLink className="navbar-items" to='/about'>
                    <img className="navbar-icons" src={aboutIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.about"
                            defaultMessage="ABOUT"
                        />
                    </h2>
                </NavLink>
                <NavLink className="navbar-items" to='/projects'>
                    <img className="navbar-icons" src={projectsIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.projects"
                            defaultMessage="PROJECTS"
                        />
                    </h2>
                </NavLink>
                <NavLink className="navbar-items" to='/resume'>
                    <img className="navbar-icons" src={resumeIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.resume"
                            defaultMessage="RESUME"
                        />
                    </h2>
                </NavLink>
                <NavLink className="navbar-items" to='/contact'>
                    <img className="navbar-icons" src={contactIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.contact"
                            defaultMessage="CONTACT"
                        />
                    </h2>
                </NavLink>
                <div className="navbar-flags-container">
                    <div className="uk-container">
                        <button className="flags-button" onClick={() => languaje.handleLanguaje('en-us')}>
                            <img className="navbar-flags" src={ukIcon} alt="" />
                        </button>
                    </div>
                    <div className="sp-container">
                        <button className="flags-button" onClick={() => languaje.handleLanguaje('es-es')}>
                            <img className="navbar-flags" src={spIcon} alt="" />
                        </button>
                    </div>
                </div>  
            </div>
        </div>
        
    )
}

export default NavBar;