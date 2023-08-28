import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoIosContact } from "react-icons/io";
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser'
import {  ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'




const Contact = () => {

    const [clearForm, setClearForm] = useState("")
    const [clearForm2, setClearForm2] = useState("")
    const [clearForm3, setClearForm3] = useState("")

    

    
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0dtz8qe', 'template_du02is7', form.current, '-rLZhKVYdonU19P31')
            .then((result) => {
                if (result.text) {

                    toast.success('Email Sent Succesfully', {
                        position: toast.POSITION.TOP_RIGHT

                    });
                }
                else {
                    toast.error("Email can not sent", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            }, (error) => {
                console.log(error.text);
            });

            setClearForm("")
            setClearForm2("")
            setClearForm3("")

        };
        
        // const handleClear = (event)=>{
        //     event.preventDefault()
        //     setClearForm("")
        //     setClearForm2("")
        //     setClearForm3("")
    
        // }
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact Me"
                icon={<IoIosContact size={40} />}
            />
            <div className="contact__content">

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={
                        {
                            transform: 'translateX(-200px)'
                        }
                    }
                    end={
                        {
                            transform: 'translateX(0px)'
                        }
                    }
                >

                    <h3 className="contact__content__header-text">
                        Lets Talk
                    </h3>


                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={
                        {
                            transform: 'translateX(200px)'
                        }
                    }
                    end={
                        {
                            transform: 'translateX(0px)'
                        }
                    }
                >
                    <form ref={form} onSubmit={sendEmail} className="contact__content__form">

                        <div className="contact__content__form__controlsWrapper">
                            <div className="nameWrapper">
                                <input value={clearForm} onChange={(e)=> setClearForm(e.target.value)} required name="user_name" className="inputName" type={'text'} />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div className="emailWrapper">
                                <input value={clearForm2} onChange={(e)=> setClearForm2(e.target.value)}  required name="user_email" className="inputEmail" type={'email'} />
                                <label htmlFor="email" className="emailLabel">E-mail</label>
                            </div>
                            <div className="descWrapper">
                                <textarea value={clearForm3} onChange={(e)=> setClearForm3(e.target.value)} rows='5' required name="message" className="inputDesc" />
                                <label htmlFor="desc" className="descLabel">Write here</label>
                            </div>
                        </div>
                        <button type="submit" value="Send">Submit</button>


                    </form>
                </Animate>

            </div>
                        <ToastContainer />
        </section>
    )

}

export default Contact