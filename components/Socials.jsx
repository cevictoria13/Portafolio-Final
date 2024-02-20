import React from 'react'
import {
    RiLinkedinBoxFill,
    RiGithubFill
} from "react-icons/ri"

const Socials = () => {

    const dataSocials = [
        {
            name: "Linkedin",
            path: 'https://www.linkedin.com',
            icon: <RiLinkedinBoxFill size="30"/>,
        },
        {
            name: "Github",
            path: 'https://www.github',
            icon: <RiGithubFill size="30"/>,
        },
        
    ];

    return (
        <div>Socials</div>
    )
}

export default Socials