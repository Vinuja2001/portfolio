import React, {useEffect} from "react";
import MyImg from "../assets/heroImage.png";
import {HiDownload} from "react-icons/hi";
import {Link} from 'react-scroll';
import TypeWriterEffect from 'react-typewriter-effect';
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const Home = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div name="home" className="h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full pt-5 z-10">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {

                            },
                            fpsLimit: 400,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: false,
                                        mode: "",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 165,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    directions: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 750,
                                    },
                                    value: 20,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: {min: 1, max: 4},
                                },
                            },
                            detectRetina: true,
                        }}/>
                    <h2 className="text-2xl sm:text-5xl font-bold text-white">Hey, I am <br/>
                        <span className="text-red-700 text-7xl">
                            <TypeWriterEffect textStyle={{fontFamily: 'Sansita'}} startDelay={100} cursorColor="white"
                                              text="Vinuja Piumjith" typeSpeed={100}>
                            </TypeWriterEffect>
                        </span>
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I'm a developer , designer and about to be a graduate in Software Engineering.I bring ideas to
                        life with code.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500}
                              className="flex flex-row w-fit px-6 py-3 my-2 items-center rounded-md bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-800">
                            Portfolio
                            <span className="pl-3 hover:scale-110 duration-300">
                                <HiDownload size={25}/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="mb-8 pb-8 ml-8">
                    <img src={MyImg} alt="my profile" className="mx-auto w-2/3 md:w-full rounded-full z-50"/>
                </div>
            </div>
        </div>
    )
}

export default Home;