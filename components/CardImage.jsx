import { Image } from "@nextui-org/react";
import Avatar from '@/assets/img/avatar.jpg'

const CardImage = () => {
    return (
        <div className="flex justify-center h-full sm:h-auto items-end">
            <Image

            isBlurred
            width={400}
            src={Avatar.src}
            alt="Foto perfil CSV"/>
            
        </div>
    )
}

export default CardImage