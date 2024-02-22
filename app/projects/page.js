import CardProject from '@/components/CardProject'
import React from 'react'

const projects = () => {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 h-screen items-center px-5 sm:px-20 xl:px-40'>
       
        <CardProject 
        title="Landing Page"
        description="Lorem"
        bgCardImage="/portafolio/assets/img/arriendo-casa-playa.jpg"
        urlDespliegue="https://github.com/cevictoria13/Proyecto-landing"
        urlRepositorio="https://github.com/cevictoria13/Proyecto-landing"
        />

        <CardProject 
        title="CRUD App"
        description="Lorem"
        bgCardImage=""
        urlDespliegue="https://github.com/cevictoria13/ProyectoCrud5.0"
        urlRepositorio="https://github.com/cevictoria13/ProyectoCrud5.0"
        />

        <CardProject 
        title="Dashboard de Datos"
        description="Lorem"
        bgCardImage="/portafolio/assets/img/dashboard.avif"
        urlDespliegue="https://franciwis.github.io/Dashboard/"
        urlRepositorio="https://github.com/cevictoria13/Proyecto-dashboard-"
        />

        <CardProject 
        title="RestoBar App"
        description="Lorem"
        bgCardImage=""
        urlDespliegue="https://fancy-palmier-141851.netlify.app/"
        urlRepositorio="https://github.com/cevictoria13/Proyecto-Resto-App"
        />

        <CardProject 
        title="E-commerce App"
        description="Lorem"
        bgCardImage="https://github.com/cevictoria13/Ecommerce-La-Botika"
        urlDespliegue="https://roaring-tulumba-ba31a3.netlify.app/"
        urlRepositorio="https://github.com/cevictoria13/Ecommerce-La-Botika"
        />
        
      
        
     
      </div>
    )
  }
  
  export default projects