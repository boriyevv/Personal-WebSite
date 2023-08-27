import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoIosContact } from "react-icons/io";
import { Animate } from 'react-simple-animate';
import './styles.scss'


const Contact = () => {

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
                    <div className="contact__content__form">

                        <div className="contact__content__form__controlsWrapper">
                            <div className="nameWrapper">
                                <input required name="name" className="inputName" type={'text'} />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div className="emailWrapper">
                            <input required name="email" className="inputEmail" type={'email'} />
                                <label htmlFor="email" className="emailLabel">E-mail</label>
                            </div>
                            <div className="descWrapper">
                            <textarea rows='5' required name="desc" className="inputDesc" type={'text'} />
                                <label htmlFor="desc" className="descLabel">Write here</label>
                            </div>
                        </div>
                        <button>Submit</button>

                    </div>
                </Animate>

            </div>
        </section>
    )

}

export default Contact