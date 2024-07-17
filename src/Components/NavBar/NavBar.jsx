import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";
import { langContext } from "../../context/langContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import homeIcon from "../../assets/homeIcon.png";
import aboutIcon from "../../assets/aboutIcon.png";
import projectsIcon from "../../assets/projectsIcon.png"
import resumeIcon from "../../assets/resumeIcon.png";
import contactIcon from "../../assets/contactIcon.png";

import ukIcon from '../../assets/United-Kingdom.png';
import spIcon from '../../assets/Spain.png';

import Style from "./NavBar.module.css";


const NavBar = () => {

    const languaje = useContext(langContext);

    const [movilMenu, setMovilMenu ] = useState(false);

    const handleMenu = () => {
        setMovilMenu(!movilMenu);
    };

    return (

        <div className={movilMenu ? Style.navbar_container_open : Style.navbar_container_close}>
            <div className={Style.section_logo_container}>
                <NavLink className={Style.navbar_items} to={'/'}>
                    <h2 className={Style.navbar_logo}>JCR.</h2>
                </NavLink>
            </div>
            <div className={Style.navbar_menu_icon} onClick={()=> handleMenu()}>
                { movilMenu ?
                    (<FontAwesomeIcon icon={faTimes} size="2x" />)
                    :
                    (<FontAwesomeIcon icon={faBars} size="2x" />)
                }
            </div>
            <div className={movilMenu ? Style.sections_container_open : Style.sections_container_close}>
                <NavLink className={Style.navbar_items} to={'/'}>
                    <img className={Style.navbar_icons} src={homeIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.home"
                            defaultMessage="HOME"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/about'>
                    <img className={Style.navbar_icons} src={aboutIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.about"
                            defaultMessage="ABOUT"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/projects'>
                    <img className={Style.navbar_icons} src={projectsIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.projects"
                            defaultMessage="PROJECTS"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/resume'>
                    <img className={Style.navbar_icons} src={resumeIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.resume"
                            defaultMessage="RESUME"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/contact'>
                    <img className={Style.navbar_icons} src={contactIcon} alt="home" />
                    <h2>
                        <FormattedMessage
                            id="navbar.contact"
                            defaultMessage="CONTACT"
                        />
                    </h2>
                </NavLink>
                <div className={Style.navbar_flags_container}>
                    <div className={Style.uk_container}>
                        <button className={Style.flags_button} onClick={() => languaje.handleLanguaje('en-us')}>
                            <img className={Style.navbar_flags} src={ukIcon} alt="" />
                        </button>
                    </div>
                    <div className={Style.sp_container}>
                        <button className={Style.flags_button} onClick={() => languaje.handleLanguaje('es-es')}>
                            <img className={Style.navbar_flags} src={spIcon} alt="" />
                        </button>
                    </div>
                </div>  
            </div>
        </div>
        
    )
}

export default NavBar;