import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/w-m-vinuja-piumjith-144b6819a/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Vinuja2001',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:vinujapiumjith@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonFill size={30}/>
                </>
            ),
            href: 'W.M.Vinuja_Piumjith-CV.pdf',
            style: 'rounded-tr-md',
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0.5 fixed">
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li key={id}
                        className={"flex justify-between items-center w-40 h-12 px-4 ml-[-100px] rounded hover:ml-[-10px] hover:rounded-md duration-700 hover:bg-red-500 "  + style}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={href} className="flex justify-between items-center w-full text-white"
                           download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default SocialLinks;