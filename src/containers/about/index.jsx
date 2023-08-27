import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import './styles.scss'
import { Link } from "react-router-dom";


const personalDetails = [
    {
        label: "Name",
        value: "Asadbek Bo'riyev"
    },
    {
        label: "Age",
        value: "19"
    },
    {
        label: "Address",
        value: "Uzbekistan"
    },
    // {
    //     label: "Email",
    //     value: "boriyevdev08@gmail.com"
    // },
    // {
    //     label: "Contact No",
    //     value: "+998 90) 443-55-67"
    // }
]

const jobSummary = 'I am a FrontEnd developer with a year of experience. I learned programming at Najot Ta`lim and now I have a strong knowledge from web development. I took part some projects during my study time, and then worked at small IT Team as a FrontEnd developer. As a mad of learning and coding I also want to share my knowledge to others, and now working part time at IT Park as a FrontEnd mentor, who teaches students from HTML, CSS basics, JavaScript and it`s framework ReactJs.'


const About = () => {

    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}

                    >

                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}

                    >
                        <h3 className="psiHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <Link className="value">{item.value}</Link>
                                    </li>


                                ))
                            }
                            <li>
                                <span className="title">E-Mail</span>
                                <Link className="value" to="mailto:boriyevdev08@gmail.com">boriyevdev08@gmail.com</Link>
                            </li>
                            <li>
                                <span className="title">Tel Number</span>
                                <Link className="value" to="tel:+998976430818">90 443-55-67</Link>
                            </li>
                        </ul>

                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}

                    >
                        <div className="about__content__servicesWrapper__inner-content">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>

                </div>



            </div>

        </section>
    )

}

export default About