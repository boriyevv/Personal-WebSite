import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaProjectDiagram } from "react-icons/fa";
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'
// import { Link } from "react-router-dom";
import './styles.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

const portfolioData = [
    {
        id: 2,
        name: "ToDo List",
        image: image1,
        link: 'https://beautiful-kangaroo-d7355c.netlify.app'
    },
    {
        id: 2,
        name: "Filtered Flags",
        image: image2,
        link: 'https://steady-crepe-97af87.netlify.app'
    },
    {
        id: 3,
        name: "E-Commerce Shop",
        image: image6,
        link: 'https://resilient-alpaca-8d9fbf.netlify.app'
    },
    {
        id: 3,
        name: "Educational Website",
        image: image4,
        link: 'https://ephemeral-starburst-0509d5.netlify.app'
    },
    {
        id: 2,
        name: "Login-Register",
        image: image5,
        link: 'https://inspiring-profiterole-50176f.netlify.app'
    },
    {
        id: 3,
        name: "CRM SYSTEM",
        image: image3,
        link: 'https://inspiring-meringue-809e8f.netlify.app'
    },
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Simple'
    },
    {
        filterId: 3,
        label: 'Complex'
    }
]


const Portfolio = () => {

    const [filtered, setFiltered] = useState(1)
    const [hovered, setHovered] = useState(null)

    // console.log(hovered)


    function handleFilter(currentId) {
        setFiltered(currentId)
    }

    const filteredItems = filtered === 1 ? portfolioData : portfolioData.filter(item => item.id === filtered)


    function handleHover(index) {
        setHovered(index)
    }

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<FaProjectDiagram size={40} />}
            />

            <div className="portfolio__content">

                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item, index) => (
                            <li className={item.filterId === filtered ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}

                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}

                            >


                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <Link className="link">
                                        <img src={item.image} alt="Data" />
                                    </Link>
                                </div>

                                <div className="overlay">
                                    {
                                        index === hovered && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button><Link className="btnLink" to={item.link} target="_blank">Visit</Link></button>
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    )

}

export default Portfolio