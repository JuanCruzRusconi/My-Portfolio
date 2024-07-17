import { FormattedMessage } from "react-intl";
import Title from "../Title/Title";
import Form from "../Form/Form";
import contactLogo from "../../assets/contactLogo.png";

import "./Contact.css"

const Contact = () => {

    let title = "CONTACT.";
    let subtitle = "Let's get in touch!";
    
    return (

        <>
            <Title 
                title={
                    <FormattedMessage 
                        id="title.contact.first"
                        defaultMessage={title}
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.contact.second"
                        defaultMessage={subtitle}
                    />
                }
            />
            <div className="contact-container">
                <Form />
                <div className="contact-image-container">
                    <img className="contact-image" src={contactLogo} alt="contactLogo" />
                </div>
            </div>
        </>
        
    )
}

export default Contact;