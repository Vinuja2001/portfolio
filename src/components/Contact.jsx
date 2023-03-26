import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 1700});
    }, [])

    return(
        <div name="contact" className="w-full h-full bg-gradient-to-t from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8" data-aos="flip-down">
                    <p className="text-5xl front-bold inline border-b-4 border-gray-500 p-2 inline">Contact</p>
                </div>
                <p className="text-xl py-6" data-aos="fade-up">Submit the form below to get in touch with me</p>
                <div className="flex justify-center items-center" data-aos="fade-up" >
                    <form action="https://getform.io/f/260df2a1-6b38-4671-ac52-f852614d5f94" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-red-500 to-red-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
                <h2 className="mt-32 text-center text-red-500">Designed & Developed by <a href="Home" className="hover:text-red-400">Vinuja Piumjith</a> </h2>
            </div>
        </div>
    )
}

export default Contact;