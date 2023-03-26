import React, {useEffect} from "react";
import FuelQueue from "../assets/portfolio/fuelQueue.jpg";
import RoboCar from "../assets/portfolio/arduino.jpg";
import Hospital from "../assets/portfolio/hospital.jpg";
import ProgressionDetection from "../assets/portfolio/python.jpg";
// import elements from "aos/src/js/helpers/elements";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Hospital,
            tittle: 'Hospital Management System',
            desc: 'Create hospital management system with a GUI using java oop',
            target: 'https://github.com/Vinuja2001/hospital-management-system',
        },
        {
            id: 2,
            src: RoboCar,
            tittle: 'Robo car',
            desc: 'Fix and program a robo car using Arduino',
            target: 'https://github.com/Vinuja2001/robocar_using_arduino',
        },
        {
            id: 3,
            src: ProgressionDetection,
            tittle: 'Student mark progression System',
            desc: 'Make a progression output system for college students by fetching their marks',
            target: 'https://github.com/Vinuja2001/progression_detection_system',
        },
        {
            id: 4,
            src: FuelQueue,
            tittle: 'Fuel queue Management System',
            desc: 'Make a fuel queue management system for filling stations with the related database using java',
            target: 'https://github.com/Vinuja2001/fuel-queue-management',
        },
    ]

    useEffect(() => {
        Aos.init({duration: 1800});
    }, [])

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8" data-aos="flip-down">
                    <p className="text-5xl front-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="text-xl py-6" data-aos="fade-up">Here are some of my works right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 px-12 sm:px-0 pb-10">
                    {
                        portfolios.map(({id, src, tittle, desc, target}) => (
                            <div key={id} className="w-80 shadow-md shadow-gray-600 rounded-lg bg-transparent" data-aos="fade-up">
                                {/*<img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>*/}
                                <div className="flex items-center justify-center bg-black rounded-b-lg">
                                    {/*<button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105">View</button>*/}
                                </div>
                                <div className="group h-96 [perspective:1000px]">
                                    <div
                                        className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        <div className="absolute inset-0">
                                            <img
                                                className="h-full w-full p-1 rounded-xl object-cover shadow-xl shadow-black/40"
                                                src={src} alt=""/>
                                        </div>
                                        <div
                                            className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                            <div className="flex min-h-full flex-col items-center justify-center">
                                                <h1 className="text-3xl font-bold">{tittle}</h1>
                                                <p className="text-base py-6">{desc}</p>
                                                <a href={target}
                                                   className="w-1/2 mt-2 rounded-md bg-neutral-800 border-2 border-gray-500 hover:border-none py-1 px-2 text-sm duration-300 hover:scale-105 hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-800">View
                                                    More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;