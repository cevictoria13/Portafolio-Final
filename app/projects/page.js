import CardProject from '@/components/CardProject'
import React from 'react'
import landing from "@/assets/img/Landing-page.png"
import dashboard from "@/assets/img/dashboard.png"
import crud from "@/assets/img/crud-registro-de-participantes.png"
import restaurant from "@/assets/img/restaurante-bar-app.png"
import tienda from "@/assets/img/ecommerce-app.png"

const projects = () => {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 h-screen items-center px-5 sm:px-20 xl:px-40'>
       
        <CardProject 
        title="Landing Page"
        description="Página para la promoción de arriendo de casa en la playa"
        bgCardImage={landing}
        urlDespliegue="https://landing-page-arriendo-casa.netlify.app/"
        urlRepositorio="https://github.com/cevictoria13/Proyecto-landing"
        />

        <CardProject 
        title="CRUD App"
        description="Desarrollo de un registro de participantes"
        bgCardImage={crud}
        urlDespliegue="https://proyecto-crud-csv.netlify.app/"
        urlRepositorio="https://github.com/cevictoria13/ProyectoCrud5.0"
        />

        <CardProject 
        title="Dashboard de Datos"
        description="Experimentando el consumo de una API de clima"
        bgCardImage={dashboard}
        urlDespliegue="https://franciwis.github.io/Dashboard/"
        urlRepositorio="https://github.com/cevictoria13/Proyecto-dashboard-"
        />

        <CardProject 
        title="RestoBar App"
        description="Desarrollo de App para restaurante con opción de reserva"
        bgCardImage={restaurant}
        urlDespliegue="https://fancy-palmier-141851.netlify.app/"
        urlRepositorio="https://github.com/cevictoria13/Proyecto-Resto-App"
        />

        <CardProject 
        title="E-commerce App"
        description="Desarrollo de tienda online con  funcionalidades básicas como agregar a carrito, compras y pagos."
        bgCardImage={tienda}
        urlDespliegue="https://roaring-tulumba-ba31a3.netlify.app/"
        urlRepositorio="https://github.com/cevictoria13/Ecommerce-La-Botika"
        />
        
      
        
     
      </div>
    )
  }
  
  export default projects