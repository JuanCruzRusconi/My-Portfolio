import Title from "../Title/Title";
import Form from "../Form/Form";
import contactLogo from "../../assets/contactLogo.png";
import contactLogo2 from "../../assets/contactLogo2.png";
import contactLogo3 from "../../assets/contactLogo3.png";

import "./Contact.css"

const Contact = () => {

    let title = "Contact."
    let subtitle = "Let's get in touch!"
    
    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <Form />
            <div className="contact-image-container">
                <img className="contact-image" src={contactLogo3} alt="contactLogo" />
            </div>
        </>
    )
}

export default Contact;