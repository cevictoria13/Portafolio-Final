import { Button, Input, Textarea } from "@nextui-org/react"

const FormContacto = () => {
  return (
    <form className='flex flex-col justify-center items-center gap-5 w-3/5 py-20 bg-gray-500/30'>
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
  )
}

export default FormContacto