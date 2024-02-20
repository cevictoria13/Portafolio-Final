'use client'
import { Button, Input, Textarea } from "@nextui-org/react"
import { motion } from "framer-motion";
import { fadeIn } from "@/components/utils/motionTransitions";

const FormContacto = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full sm:w-3/4 xl:w-3/5">

      <form className='flex flex-col justify-center items-center gap-5 py-20 bg-gray-500/30'>
        <h1 className="text-2xl">Formulario de Contacto</h1>
        <Input
          type="text"
          label="Nombre"
          className="w-1/2 xl:w-1/3" />

        <Input
          type="text"
          label="Email"
          className="w-1/2 xl:w-1/3"
        />

        <Textarea
          label="Mensaje"
          className="w-1/2 xl:w-1/3"
        />

        <Button className="text-white mt-5 py-6 px-8 text-base" color="secondary">Contactar
        </Button>
      </form>
    </motion.div>
  )
}

export default FormContacto