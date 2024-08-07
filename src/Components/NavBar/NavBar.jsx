import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";
import { langContext } from "../../context/langContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import homeIcon from "../../assets/homeIcon.png";
import aboutIcon from "../../assets/aboutIcon.png";
import skillsIcon from "../../assets/skillsIcon.png";
import projectsIcon from "../../assets/projectsIcon.png"
import resumeIcon from "../../assets/resumeIcon.png";
import contactIcon from "../../assets/contactIcon.png";
import arrowUpIcon from "../../assets/arrowUpIcon.svg"
import arrowDownIcon from "../../assets/arrowDownIcon.svg"

import ukIcon from '../../assets/United-Kingdom.png';
import spIcon from '../../assets/Spain.png';

import Style from "./NavBar.module.css";


const NavBar = () => {

    const languaje = useContext(langContext);

    const { locale } = useContext(langContext)

    const [movilMenu, setMovilMenu] = useState(false);

    const [langMenu, setLangMenu] = useState(false);

    const handleMenu = () => {
        setMovilMenu(!movilMenu);
    };

    const handleLangMenu = () => {
        setLangMenu(!langMenu);
    }

    return (

        <header className={movilMenu ? Style.navbar_container_open : Style.navbar_container_close}>
            <div className={Style.section_logo_container}>
                <NavLink className={Style.navbar_items} to={'/'}>
                    <h2 className={Style.navbar_logo}>JCR.</h2>
                </NavLink>
            </div>
            <div className={Style.navbar_menu_icon} onClick={() => handleMenu()}>
                {movilMenu ?
                    (<FontAwesomeIcon icon={faTimes} size="2x" />)
                    :
                    (<FontAwesomeIcon icon={faBars} size="2x" />)
                }
            </div>
            <nav className={movilMenu ? Style.sections_container_open : Style.sections_container_close}>
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
                    <img className={Style.navbar_icons} src={aboutIcon} alt="about" />
                    <h2>
                        <FormattedMessage
                            id="navbar.about"
                            defaultMessage="ABOUT"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/skills'>
                    <img className={Style.navbar_icons} src={skillsIcon} alt="skills" />
                    <h2>
                        <FormattedMessage
                            id="navbar.skills"
                            defaultMessage="SKILLS"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/projects'>
                    <img className={Style.navbar_icons} src={projectsIcon} alt="projects" />
                    <h2>
                        <FormattedMessage
                            id="navbar.projects"
                            defaultMessage="PROJECTS"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/resume'>
                    <img className={Style.navbar_icons} src={resumeIcon} alt="resume" />
                    <h2>
                        <FormattedMessage
                            id="navbar.resume"
                            defaultMessage="RESUME"
                        />
                    </h2>
                </NavLink>
                <NavLink className={Style.navbar_items} to='/contact'>
                    <img className={Style.navbar_icons} src={contactIcon} alt="contact" />
                    <h2>
                        <FormattedMessage
                            id="navbar.contact"
                            defaultMessage="CONTACT"
                        />
                    </h2>
                </NavLink>
                <div className={Style.navbar_items} onClick={() => handleLangMenu()}>
                    {locale === 'en-us' ?
                        <h2>EN</h2>
                        :
                        <h2>ES</h2>
                    }
                    {langMenu ?
                        (<img className={Style.navbar_icons_lang} src={arrowUpIcon} alt="" />)
                        :
                        (<img className={Style.navbar_icons_lang} src={arrowDownIcon} alt="" />)
                    }
                </div>
                <div className={langMenu ? Style.lang_container_open : Style.lang_container_close}>
                    <div className={Style.lang_options}>
                        <button className={Style.lang_button} onClick={() => languaje.handleLanguaje('en-us')}>
                            <h4 className={Style.lang_text}>EN</h4>
                            <img className={Style.lang_flags} src={ukIcon} alt="" />
                        </button>
                    </div>
                    <div className={Style.lang_options}>
                        <button className={Style.lang_button} onClick={() => languaje.handleLanguaje('es-es')}>
                            <h4 className={Style.lang_text}>ES</h4>
                            <img className={Style.lang_flags} src={spIcon} alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavBar;

