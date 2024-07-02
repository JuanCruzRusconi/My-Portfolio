import Title from "../Title/Title";
import Form from "../Form/Form";
import contactLogo from "../../assets/contactLogo.png";

import "./Contact.css"

const Contact = () => {

    let title = "CONTACT."
    let subtitle = "Let's get in touch!"
    
    return (

        <>
            <Title title={title} subtitle={subtitle} />
            <Form />
            <div className="contact-image-container">
                <img className="contact-image" src={contactLogo} alt="contactLogo" />
            </div>
        </>
        
    )
}

export default Contact;