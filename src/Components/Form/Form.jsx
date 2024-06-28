import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css"
import Swal from "sweetalert2";

export const Form = () => {
    
    const form = useRef();

    const [ formData, setFormData ] = useState({ name: '', email: '', message: '' })
  
    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    console.log(formData);

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
  // VALIDAR CAMPOS DEL FORMMULARIO - EVITAR QUE SE ENVIE VACIO
    return (
        
        <section className="form-container">
            <h3 className="form-title">Send me an email.</h3>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                    className="form-input"
                    type="text" 
                    name="name"
                    placeholder="Name"
                    onChange={handleOnChange}
                    value={formData.name}
                />
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
                    placeholder="Type your message."
                    onChange={handleOnChange}
                    value={formData.message}
                />
                <button className="form-button">Send</button>
            </form>
        </section>
    );
  };


export default Form;

/*
const Form = () => {

    const [ formData, setFormData ] = useState({ name: '', email: '', message: '' });
    
    const handleOnSubmit = (event) => {

        event.preventDefault()

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
                    placeholder="Name"
                    onChange={handleOnChange}
                    value={formData.name}
                />
                <input className="form-input"
                    type="text"
                    name="email"
                    placeholder="Mail"
                    onChange={handleOnChange}
                    value={formData.email}
                />
                <input className="form-input"
                    type="placeholder"
                    name="message"
                    placeholder="Type your message"
                    onChange={handleOnChange}
                    value={formData.message}
                />
                <button className="form-button">Send</button>
            </form>
        </section>
    )
}
*/