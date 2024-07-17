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
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.contact.second"
                    />
                }
            />
            <Form />
            <div className="contact-image-container">
                <img className="contact-image" src={contactLogo} alt="contactLogo" />
            </div>
        </>
        
    )
}

export default Contact;