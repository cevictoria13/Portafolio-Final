import React from 'react'
import { Image } from "@nextui-org/react"
import profile from "@/assets/img/profile.png"

const CardAbout = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <Image           
                isBlurred
                className='mb-5'
                width={300}
                src={profile.src}
                alt="foto de perfil" />
            <div>
                <h1 className='text-4xl mb-5
                 font-bold text-secondary'>About</h1>
            </div>

            <div>
                <p className='text-xl px-5 sm:px-20'>
                    Lorem impsum dolooors
                </p>
            </div>

        </div>
    );
};

export default CardAbout