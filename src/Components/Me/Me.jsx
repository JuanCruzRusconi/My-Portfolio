import { FormattedMessage } from "react-intl";
import IconsMenu from "../IconsMenu/IconsMenu";
import homeLogo1 from "../../assets/homeLogo1.png";
import homeLogo2 from "../../assets/homeLogo2.png";

import "./Me.css";

const Me = ({ children }) => {

    let greeting = "Hi!, I'm";
    let name = "Juan Cruz Rusconi";
    let spec = "Full Stack Developer";

    return (
        <>
            <div className="me-container">
                <div className="me">
                    <h2 className="me-intro">
                        <FormattedMessage
                            id="me.greeting"
                            defaultMessage={greeting}
                        />
                    </h2>
                    <h1 className="me-name">
                        <FormattedMessage
                            id="me.name"
                            defaultMessage={name}
                        />
                    </h1>
                    <h2 className="me-intro">
                        <FormattedMessage
                            id="me.spec"
                            defaultMessage={spec}

                        />
                        <strong className="inserction point">|</strong>
                    </h2>
                    {children}
                </div>
                <div className="me-image-container">
                    <img className="me-image" src={homeLogo2} alt="homeLogo" />
                </div>
            </div>
            <div className="icons-menu">
                <IconsMenu />
            </div>
        </>

    )
}

export default Me;
/*
<h2 className="me-intro">Hi! I'm</h2>
                <h1 className="me-name">Juan Cruz Rusconi,</h1>
                <h2 className="me-intro">Full Stack Developer.<strong className="inserction point">|</strong></h2>
                {children}
                */