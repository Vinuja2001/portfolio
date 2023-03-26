import React, {useEffect} from "react";
import 'react-vertical-timeline-component/style.min.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {

    useEffect(() => {
        Aos.init({duration: 1700});
    }, [])

    return (
        <div name="experience" className="h-full pt-16 bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="pb-8" data-aos="flip-down">
                    <p className="text-5xl front-bold inline border-b-4 border-gray-500 p-2 inline">Education</p>
                </div>
                <p className="text-xl py-6" data-aos="fade-up">Here are some of my educational milestones</p>
                <div className="flex items-center justify-center py-10">
                    <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
                        <ol className="relative border-l-4 border-red-600 leading-loose">
                            <li className="mb-10 ml-6 w-[400px]">
                                <div className="absolute w-4 h-4 bg-red-600 border-4 border-red-600 rounded-full -left-[0.6rem]"/>
                                <p className="absolute -left-[3.5rem] p-0 m-0 font-bold" data-aos="fade-up">2017</p>
                                <p className="font-bold text-lg mb-1" data-aos="fade-up">GCE Ordinary Level</p>
                                <p className="font-bold text-sm mb-2" data-aos="fade-up">Thurstan College - Colombo</p>
                                <p>
                                    <br/>
                                </p>
                            </li>
                            <li className="mb-10 ml-6 w-[400px]">
                                <div className="absolute w-4 h-4 bg-red-600 border-4 border-red-600 rounded-full -left-[0.6rem]"/>
                                <p className="absolute -left-[3.5rem] p-0 ml-0 font-bold" data-aos="fade-up">2018 <br/> 2020</p>
                                <p className="font-bold text-lg mb-1" data-aos="fade-up">GCE Advanced Level</p>
                                <p className="font-bold text-sm mb-2" data-aos="fade-up">Thurstan College - Colombo</p>
                                <p>
                                    <br/>
                                </p>
                            </li>
                            <li className="mb-10 ml-6 w-[400px]">
                                <div className="absolute w-4 h-4 bg-red-300 border-4 border-red-600 rounded-full -left-[0.6rem]"/>
                                <p className="absolute -left-[3.5rem] p-0 -ml-3 font-bold text-right mr-4" data-aos="fade-up">
                                    2021 <br/>
                                    Present
                                </p>
                                <p className="font-bold text-lg mb-1" data-aos="fade-up">Undergraduate</p>
                                <p className="font-bold text-sm mb-2" data-aos="fade-up">Informatics Institute of Technology(IIT)r</p>
                                <p data-aos="fade-up">Affiliated with University of Westminster - UK</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;