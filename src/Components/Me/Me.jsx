import homeLogo1 from "../../assets/homeLogo1.png";
import homeLogo2 from "../../assets/homeLogo2.png";

import { IntlProvider, FormattedMessage } from "react-intl";

import "./Me.css";

const Me = ({children}) => {

    return (

            <div className="me-container">
                <div className="me">
                    <h2 className="me-intro">
                        <FormattedMessage
                            id="me.greeting"
                        />
                    </h2>
                    <h1 className="me-name">
                        <FormattedMessage
                            id="me.name"
                        />
                    </h1>
                    <h2 className="me-intro">
                        <FormattedMessage
                            id="me.spec"
                        />
                        <strong className="inserction point">|</strong>
                    </h2>
                    {children}
                </div>
                <div className="me-image">
                    <img className="home-image" src={homeLogo2} alt="homeLogo" />
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