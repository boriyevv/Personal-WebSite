import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";



const Home = () => {
    const navigate = useNavigate()

    const navigateToContact = () => {
        navigate('/contact')

    }

    return (
        <section id="home" className="home">

            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Asadbek
                    <br />
                    Front End developer
                </h1> 
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}

                end={{
                    transform: 'translateX(0px)'
                }}

            >
                <div className="home__contact-me">
                    <button onClick={navigateToContact}>Hire Me</button>
                </div>
            </Animate>

        </section>
    )

}



export default Home