'use client'
import React from 'react';
import { Image } from "@nextui-org/react";
import profile from "@/assets/img/profile.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/utils/motionTransitions";

const CardAbout = () => {
    return (
        <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"

            className='h-screen flex flex-col justify-center items-center'>
            <Image
                isBlurred
                className='mb-5'
                width={300}
                src={profile.src}
                alt="foto de perfil" />
            <div>
                <h1 className='text-4xl mb-5 mt-5
                 font-bold text-secondary'>About me&us</h1>
            </div>

            <div>
                <p className='text-xl px-5 sm:px-20'>
                    Más de 15 años de experiencia en diseño de productos y servicios como también en gestión de proyectos. Actualmente, incorporamos el servicio de desarrollo frontend y backend, enfocado en la construcción de aplicaciones web para entregar soluciones funcionales y atractivas a nuestros clientes, con herramientas como: HTML, JS, Css, React, bootstrap, next y tailwind.

                </p>
            </div>

            <div>
                <p className='text-2xl mb-5 mt-5 font-bold text-secondary px-5 sm:px-20'>
                    Contáctanos para desarrollar una solución a tu medida.
                </p>
            </div>

        </motion.div>
    );
};

export default CardAbout