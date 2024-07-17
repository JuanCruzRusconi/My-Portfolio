import homeLogo1 from "../../assets/homeLogo1.png";
import homeLogo2 from "../../assets/homeLogo2.png";

import { FormattedMessage } from "react-intl";

import "./Me.css";

const Me = ({children}) => {

    return (

            <div className="me-container">
                <div className="me">
                    <h2 className="me-intro">
                        <FormattedMessage
                            id="me.greeting"
                            defaultMessage="Hi!, I'm"
                        />
                    </h2>
                    <h1 className="me-name">
                        <FormattedMessage
                            id="me.name"
                            defaultMessage="Juan Cruz Rusconi,"
                        />
                    </h1>
                    <h2 className="me-intro">
                        <FormattedMessage
                            id="me.spec"
                            defaultMessage="Full Stack Developer."

                        />
                        <strong className="inserction point">|</strong>
                    </h2>
                    {children}
                </div>
                <div className="me-image-container">
                    <img className="me-image" src={homeLogo2} alt="homeLogo" />
                </div>
            </div>

    )
}

export default Me;
/*
<h2 className="me-intro">Hi! I'm</h2>
                <h1 className="me-name">Juan Cruz Rusconi,</h1>
                <h2 className="me-intro">Full Stack Developer.<strong className="inserction point">|</strong></h2>
                {children}
                */