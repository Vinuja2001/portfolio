import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1800});
    }, [])

    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white mt-[-15px]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8" data-aos="flip-down">
                    <p className="text-5xl front-bold inline border-b-4 border-gray-500 ">About Me</p>
                </div>
                <p className="text-xl mt-15" data-aos="fade-up">Hi there! My name is Vinuja Piumjith and I am an undergraduate student studying software engineering.
                    I am passionate about various aspects of technology including web design & development, database
                    management, cloud computing, and iOS development.</p>
                <br/>
                <p className="text-xl" data-aos="fade-up">As someone who is always eager to learn and grow,
                    I have been actively building websites and optimizing SEO as part of my work.</p>
                <br/>
                <p className="text-xl" data-aos="fade-up">I am seeking
                    opportunities to contribute my skills and knowledge to exciting projects where I can continue to
                    learn and grow. If you're looking for someone who is dedicated and enthusiastic about technology,
                    look no further. Let's work together to bring your vision to life!</p>
            </div>
        </div>
    )
}

export default About;