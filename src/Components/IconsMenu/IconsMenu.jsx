import codeOpenIcon from "/svgs/code-open-iconsMenu.svg";
import htmlIcon from "/svgs/html5-iconsMenu.svg";
import cssIcon from "/svgs/css3-iconsMenu.svg";
import javascriptIcon from "/svgs/javascript-iconsMenu.svg";
import typescriptIcon from "/svgs/typescript-iconsMenu.svg"
import reactIcon from "/svgs/react-iconsMenu.svg";
import mongodbIcon from "/svgs/mongodb-iconsMenu.svg";
import expressIcon from "/svgs/express-iconsMenu.svg";
import nodeIcon from "/svgs/node-iconsMenu.svg";
import firebaseIcon from "/svgs/firebase-iconsMenu.svg";

import codeCloseIcon from "/svgs/code-close-iconsMenu.svg";

import "./IconsMenu.css";

const IconsMenu = () => {

    return (

        <div className="icons-menu-container">
            <img className="icon-item" src={codeOpenIcon} alt="code" />
            <img className="icon-item" src={htmlIcon} alt="html" />
            <img className="icon-item" src={cssIcon} alt="css" />
            <img className="icon-item" src={javascriptIcon} alt="javascript" />
            <img className="icon-item" src={reactIcon} alt="reactjs" />
            <img className="icon-item" src={mongodbIcon} alt="mongodb" />
            <img className="icon-item" src={nodeIcon} alt="nodejs" />
            <img className="icon-item" src={expressIcon} alt="expressjs" />
            <img className="icon-item" src={typescriptIcon} alt="typescript" />
            <img className="icon-item" src={firebaseIcon} alt="firebase" />
            <img className="icon-item" src={codeCloseIcon} alt="code" />
        </div>

    )
}

export default IconsMenu;