"use client"
import React from 'react'
import {
    RiLinkedinBoxFill,
    RiGithubFill
} from "react-icons/ri"
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from './utils/motionTransitions';

const Socials = () => {

    const dataSocials = [
        {
            name: "Linkedin",
            path: "https://www.linkedin.com",
            icon: <RiLinkedinBoxFill size="30" />,
        },
        {
            name: "Github",
            path: "https://www.github",
            icon: <RiGithubFill size="30" />,
        },

    ];

    return (
        <motion.div 
        className="fixed bottom-0 z-30 flex flex-col items-center w-full mt-auto md:justify-center h-max md:top-1/4 md:left-5 md:w-16 md:max-w-md md:h-screen"
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        >
            <div 
            className='flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-gray-500/30 sm:shadow-md backdrop-blur-sm md:rounded-full '
            >
                {dataSocials.map(({ name, path, icon }) => (
                    <div key={name}>
                        <Link 
                        href={path} 
                        className='group transition-all duration-300 hover:text-secondary '>
                            <div 
                            className='absolute left-20 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center'
                            >
                                <div  
                                className='relative flex items-center p-2 leading-none text-secondary font-bold capitalize bg-gray-500/30 rounded-sm'
                                >
                                    {name}
                                </div>
                                <div className='absolute borde-r-8 border-l-0 border-solid border-r-white  '> </div>
                            </div>
                            {icon}
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Socials

//className='absolute left-20 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center'