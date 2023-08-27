import { MdOutlineWorkHistory } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { SiFrontendmentor } from "react-icons/si";
import { FaSchool } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

export const data = {
    experience:[
        {
            title:"ReactJs programmer",
            subTitle: "Toshkent, ChL",
            description: "Web Street Small outsourcing IT Team",
            date: "Novemver 2022 - January 2023",
            icon: <RiReactjsLine/>

        },
        {
            title:"FrontEnd Developer",
            subTitle: "Progress Learning center",
            description: "Website for Language Learning center",
            date: "February 2023 - Aprel 2023",
            icon: <MdOutlineWorkHistory/>
        },
        {
            title:"FrontEnd Mentor and developer",
            subTitle: "IT Park Uzbekistan, Karshi",
            description: "IT learning and supporting company",
            date: "Aprel 2023 - Present",
            icon: <SiFrontendmentor/>
        },
    ],
    study:[
        {
            title:"Secondary",
            subTitle: "Karshi 2nd secondary school",
            description: "11 year school grade",
            date: "September 2011 - May 2022",
            icon: <FaSchool/>

        },
        {
            title:"English Language",
            subTitle: "Progress Center",
            description: "A year of study from 0 to IELTS",
            date: "January 2021 - May 2022",
            icon: <RiEnglishInput/>
        },
        {
            title:"Web Programming",
            subTitle: "Najot Ta`lim Inovation School",
            description: "6 month of FrontEnd development studies",
            date: "June 2022 - November 2022",
            icon: <IoLogoJavascript/>
            
        },
    ]
}