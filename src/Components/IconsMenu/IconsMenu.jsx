import htmlIcon from "../../../public/svgs/html5-solid.svg";
import cssIcon from "../../../public/svgs/css3-solid.svg";
import javascriptIcon from "../../../public/svgs/js-solid.svg";
import reactIcon from "../../../public/svgs/react-solid2.svg";
import mongodbIcon from "../../../public/svgs/mongodb-solid.svg";
import expressIcon from "../../../public/svgs/express-solid.svg";
import nodeIcon from "../../../public/svgs/node-solid.svg";
import dockerIcon from "../../../public/svgs/docker-solid.svg";
import gitIcon from "../../../public/svgs/git-solid.svg";
import githubIcon from "../../../public/svgs/github-solid.svg";
import gitlabIcon from "../../../public/svgs/gitlab-solid.svg";
import typescriptIcon from "../../../public/svgs/typescript-solid.svg"
import codeIcon from "../../../public/svgs/code-solid.svg";

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
            <img className="icon-item" src={dockerIcon} alt="docker" />
            <img className="icon-item" src={gitIcon} alt="git" />
            <img className="icon-item" src={githubIcon} alt="github" />
            <img className="icon-item-ts" src={gitlabIcon} alt="gitlab" />
            <img className="icon-item" src={codeIcon} alt="code" />
        </div>

    )
}

export default IconsMenu;