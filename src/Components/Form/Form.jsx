import { useState } from "react";

import "./Form.css"
import Swal from "sweetalert2";

const Form = () => {

    const [ formData, setFormData ] = useState({ name: '', email: '' });
    const handleOnSubmit = (event) => {

        event.preventDefault()
        console.log(`enviando:`, formData)

        Swal.fire({
            title: "Message sent!",
            text: "Thank you. I'll read it soon!",
            icon: "success"
          });
    }

    const handleOnChange = (event) => {
        
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    console.log(formData)
    return (
        
        <section className="form-container">
            <h3 className="form-title">Send me an email.</h3>
            <form onSubmit={handleOnSubmit} className="form">
                <input className="form-input" 
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    onChange={handleOnChange}
                    value={formData.name}
                />
                <input className="form-input"
                    type="text"
                    name="email"
                    placeholder="Ingrese su mail"
                    onChange={handleOnChange}
                    value={formData.email}
                />
                <input className="form-input"
                    type="placeholder"
                    name="email"
                    placeholder="ingrese su mail"
                    onChange={handleOnChange}
                    value={formData.email}
                />
                <button className="form-button">Enviar</button>
            </form>
        </section>
    )
}

export default Form;