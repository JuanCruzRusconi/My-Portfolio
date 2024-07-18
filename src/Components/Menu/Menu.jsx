import reactLogo from "../../assets/built-with-react.svg";
import loveLogo from "../../assets/made-with-love.svg";

import "./Menu.css";

const Menu = () => {

    return (

        <div className="menu-container">
            <div className="menu-items">
                <h2 className="menu-item">HTML</h2>
                <h2>||</h2>
                <h2 className="menu-item">CSS</h2>
                <h2>||</h2>
                <h2 className="menu-item">JavaScript</h2>
                <h2>||</h2>
                <h2 className="menu-item">MERN Stack</h2>
            </div>
            <div className="menu-items-minors">
                <h2 className="menu-item">TypeScript</h2>
                <h2>||</h2>
                <h2 className="menu-item">NestJs</h2>
                <h2>||</h2>
                <h2 className="menu-item">Docker</h2>
                <h2>||</h2>
                <h2 className="menu-item">MaterialUI</h2>
                <h2>||</h2>
                <h2 className="menu-item">Tailwind</h2>                    
            </div>
            <div className="menu-logo">
                <img className="menu-logo-item" src={reactLogo} alt="" />
                <img className="menu-logo-item" src={loveLogo} alt="" />
            </div>
        </div>

    )
}

export default Menu; 
