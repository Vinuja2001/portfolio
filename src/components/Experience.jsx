import React, {useEffect} from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import arduino from "../assets/arduino.png";
import aws from "../assets/aws.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import mongoDb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import wp from "../assets/wordpress.png";
import postman from "../assets/postman.png";
import springboot from "../assets/springboot.png";
import restapi from "../assets/restapi.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500',
            data: 'zoom-out-right'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500',
            data: 'zoom-out-down'
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500',
            data: 'zoom-out-left'
        },
        {
            id: 4,
            src: reactImg,
            title: "React",
            style: 'shadow-blue-600',
            data: 'zoom-out-right'
        },
        {
            id: 5,
            src: node,
            title: "Node.js",
            style: 'shadow-lime-600',
            data: 'zoom-out-down'
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: 'shadow-sky-400',
            data: 'zoom-out-left'
        },
        {
            id: 7,
            src: php,
            title: "PHP",
            style: 'shadow-indigo-500',
            data: 'zoom-out-right'
        },
        {
            id: 8,
            src: java,
            title: "Java",
            style: 'shadow-cyan-800',
            data: 'zoom-out-down'
        },
        {
            id: 9,
            src: bootstrap,
            title: "Bootstrap",
            style: 'shadow-indigo-700',
            data: 'zoom-out-left'
        },
        {
            id: 10,
            src: mysql,
            title: "MySql",
            style: 'shadow-amber-700',
            data: 'zoom-out-right'
        },
        {
            id: 11,
            src: python,
            title: "Python",
            style: 'shadow-amber-400',
            data: 'zoom-out-down'
        },
        {
            id: 12,
            src: mongoDb,
            title: "MongoDB",
            style: 'shadow-yellow-900',
            data: 'zoom-out-left'
        },
        {
            id: 13,
            src: wp,
            title: "WordPress",
            style: 'shadow-sky-300',
            data: 'zoom-out-right'
        },
        {
            id: 14,
            src: aws,
            title: "AWS",
            style: 'shadow-white',
            data: 'zoom-out-down'
        },
        {
            id: 15,
            src: arduino,
            title: "Arduino",
            style: 'shadow-emerald-700',
            data: 'zoom-out-left'
        },
        {
            id: 16,
            src: github,
            title: "Github",
            style: 'shadow-purple-500',
            data: 'zoom-out-right'
        },
        {
            id: 17,
            src: postman,
            title: "Postman",
            style: 'shadow-orange-500',
            data: 'zoom-out-down'
        },
        {
            id: 18,
            src: springboot,
            title: "Spring Boot",
            style: 'shadow-lime-500',
            data: 'zoom-out-left'
        },
        {
            id: 19,
            src: restapi,
            title: "Rest API",
            style: 'shadow-emerald-500',
            data: 'zoom-out-left'
        }
    ]

    useEffect(() => {
        Aos.init({duration: 1700});
    }, [])

    return <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div data-aos="flip-down">
                <p className="text-5xl front-bold inline border-b-4 border-gray-500 p-2 inline">Experience</p>
            </div>
            <p className="text-xl py-6" data-aos="fade-up">These are the technologies I've worked with</p>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    skills.map(({id, src, title, style, data}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                             data-aos={data}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Experience;