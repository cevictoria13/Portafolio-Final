'use client'
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/utils/motionTransitions";
import Avatar from '@/assets/img/avatar.jpg';

const CardImage = () => {
    return (
        <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            className="flex justify-center h-full sm:h-auto items-end">
            <Image

                isBlurred
                width={400}
                src={Avatar.src}
                alt="Foto perfil CSV" />

        </motion.div>
    )
}

export default CardImage