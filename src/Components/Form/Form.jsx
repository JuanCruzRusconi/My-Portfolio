import React, { useContext, useRef } from 'react';
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { langContext } from '../../context/langContext';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import RegularExpressions from '../../expressions.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

import "./Form.css"

export const Form = () => {
    
    const form = useRef();

    const { locale } = useContext(langContext);

    const [ formData, setFormData ] = useState({ name: '', email: '', message: '' })
  
    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };
    console.log(formData);

    const handleValid = () => {
        console.log('')
    }

    const sendEmail = (e) => {
      
        e.preventDefault();

        Swal.fire({
            title: "Message sent!",
            text: "Thank you. I'll read it soon!",
            icon: "success"
        });
  
        emailjs.sendForm('service_yof5aew', 'template_wv1afy7', form.current, {
            publicKey: 'P2sHLKZQ67wfXdLH9'})
            .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    let title = "Send me an email.";
    let button = "Send";
  // VALIDAR CAMPOS DEL FORMMULARIO - EVITAR QUE SE ENVIE VACIO
    return (
        
        <section className="form-container">
            <h3 className="form-title">
                <FormattedMessage 
                    id="form.title"
                    defaultMessage={title}
                />
            </h3>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <div className='form-group-input'>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder={locale === 'en-us' ? "Name" : "Nombre"}
                        onChange={handleOnChange}
                        value={formData.name}
                    />
                </div>
                
                <input
                    className="form-input"
                    type="text" 
                    name="email"
                    placeholder="Email"       
                    onChange={handleOnChange}                            
                    value={formData.email}
                />
                <textarea
                    className="form-textarea"
                    type="text"
                    name="message"
                    placeholder={locale === 'en-us' ? "Type your message." : "Escriba su mensaje."}
                    onChange={handleOnChange}
                    value={formData.message}
                />
                <button className="form-button">
                    <FormattedMessage 
                        id="form.send-button" 
                        defaultMessage={button}
                    />
                </button>
            </form>
        </section>

    )
}

export default Form;

/*
    onKeyUp={handleValid}
    onBlur={handleValid}
    regularExpression={RegularExpressions.name}
*/