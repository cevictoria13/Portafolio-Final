"use client"
import React from 'react'
import {
    RiLinkedinBoxFill,
    RiGithubFill
} from "react-icons/ri"
import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {

    const dataSocials = [
        {
            name: "Linkedin",
            path: 'https://www.linkedin.com',
            icon: <RiLinkedinBoxFill size="30" />,
        },
        {
            name: "Github",
            path: 'https://www.github',
            icon: <RiGithubFill size="30" />,
        },

    ];

    return (
        <motion.div className="fixed bottom-0 z-30 flex flex-col items-center w-full mt-auto md:justify-center h-max md:top-1/4 md:left-5">
            <div>
                {dataSocials.map(({ name, path, icon }) => (
                    <div key={name}>
                        <Link href={path}>
                            <div>
                                <div>
                                    {name}
                                </div>
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