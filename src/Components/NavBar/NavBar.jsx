import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/homeIcon.png";
import aboutmeIcon from "../../assets/aboutmeIcon.png";
import projectsIcon from "../../assets/projectsIcon.png"
import resumeIcon from "../../assets/resumeIcon.png";
import contactIcon from "../../assets/contactIcon.png";

import "./NavBar.css";

const NavBar = () => {

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
                    <h2>HOME</h2>
                </NavLink>
                <NavLink className="navbar-items" to='/about'>
                    <img className="navbar-icons" src={aboutmeIcon} alt="home" />
                    <h2>ABOUT</h2>
                </NavLink>
                <NavLink className="navbar-items" to='/projects'>
                    <img className="navbar-icons" src={projectsIcon} alt="home" />
                    <h2>PROJECTS</h2>
                </NavLink>
                <NavLink className="navbar-items" to='/resume'>
                    <img className="navbar-icons" src={resumeIcon} alt="home" />
                    <h2>RESUME</h2>
                </NavLink>
                <NavLink className="navbar-items" to='/contact'>
                    <img className="navbar-icons" src={contactIcon} alt="home" />
                    <h2>CONTACT</h2>
                </NavLink>  
            </div>
        </div>
        
    )
}

export default NavBar;