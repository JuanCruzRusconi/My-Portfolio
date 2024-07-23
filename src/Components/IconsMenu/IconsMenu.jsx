import htmlIcon from "/svgs/html5-solid.svg";
import cssIcon from "/svgs/css3-solid.svg";
import javascriptIcon from "/svgs/js-solid.svg";
import reactIcon from "/svgs/react-solid.svg";
import mongodbIcon from "/svgs/mongodb-solid.svg";
import expressIcon from "/svgs/express-solid.svg";
import nodeIcon from "/svgs/node-solid.svg";
import firebaseIcon from "/svgs/firebase-solid.svg";
import dockerIcon from "/svgs/docker-solid.svg";
import typescriptIcon from "/svgs/typescript-solid.svg"
import codeIcon from "/svgs/code-solid.svg";

import "./IconsMenu.css";

const IconsMenu = () => {

    return (

        <div className="icons-menu-container">
            <img className="icon-item" src={codeIcon} alt="code" />
            <img className="icon-item" src={htmlIcon} alt="html" />
            <img className="icon-item" src={cssIcon} alt="css" />
            <img className="icon-item" src={javascriptIcon} alt="javascript" />
            <img className="icon-item-ts" src={typescriptIcon} alt="typescript" />
            <img className="icon-item" src={reactIcon} alt="reactjs" />
            <img className="icon-item-ex" src={mongodbIcon} alt="mongodb" />
            <img className="icon-item-ex" src={expressIcon} alt="expressjs" />
            <img className="icon-item-nd" src={nodeIcon} alt="nodejs" />
            <img className="icon-item-ex" src={firebaseIcon} alt="firebase" />
            <img className="icon-item" src={dockerIcon} alt="docker" />
            <img className="icon-item" src={codeIcon} alt="code" />
        </div>

    )
}

export default IconsMenu;