import { useState } from 'react'
import React from 'react';
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import Search from '../Components/Search'
import Services from '../Components/Services'
import Benefit from '../Components/Benefits'
import Professional from '../Components/Professional'
import Faqs from '../Components/Faqs'
//import './Home.css'


function Home() {
  return (
    <>
        {/*<Navbar/>*/}
        <Carousel/>
        <div className="justify-center items-center bg-gradient-to-b from-blue-700 to-blue-400 " >
          <h2 className="relative flex justify-center text-white pt-10 text-[1.5rem] 
          mbxl:text-[1.8rem] md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-8xl">
            Bienvenido a CitasFacil
          </h2>
          
          <div className="flex justify-center items-center mb-10">
            <img className="logo 
            mt-1 w-[10rem] h-[8rem]
            md:mt-5 md:w-[14rem] md:h-[12rem]
            lg:mt-5 lg:w-[15rem] lg:h-[13rem]
            xl:mt-5 xl:w-[17rem] xl:h-[15rem]
            2xl:mt-5 2xl:w-[26rem] 2xl:h-[22rem]" src="/image/header/Logo.png" alt="Logo"/>
          </div>		
          
          <p className="flex text-center pl-6 pr-6 text-white pt-0 text-[1.5rem]   
          md:justify-center md:text-[1.2rem] lg:text-xl xl:text-2xl 2xl:text-4xl">
            ¡Tu guía médica para encontrar y manejar tus citas con profesionales de la salud!
          </p>

          <Search/>

          <div className="relative  mt-10 mb-10 grid grid-cols-2 mbxx:grid-cols-3 
          md:grid-cols-4 md:justify-center md:pl-4 md:pr-4
          lg:grid-cols-5 lg:justify-center lg:pl-6 lg:pr-6
          xl:grid-cols-5 xl:justify-center xl:pl-12 xl:pr-12">
              <Services title='Cardiologia' href='../image/servicios/cardiologia.png'/>
              <Services title='Pediatria' href='../image/servicios/pediatria.png'/>
              <Services title='Ginecologia' href='../image/servicios/ginecologia.png'/>
              <Services title='General' href='../image/servicios/medicina_general.png'/>
              <Services title='Psicologia' href='../image/servicios/psicologia.png'/>
            
              <Services title='Neumonologia' href='../image/servicios/neumonologia.png'/>
              <Services title='Urologia' href='../image/servicios/urologia.png'/>
              <Services title='Traumatologia' href='../image/servicios/traumatologia.png'/>
              <Services title='Nutricionista' href='../image/servicios/nutricionista.png'/>
              <Services title='Oftalmologia' href='../image/servicios/oftalmologia.png'/>
          </div>

          <div className="relative bg-gray-100">
            <h2 class="relative flex justify-center items-center text-indigo-700 pt-5 text-xl 
            mbxx:text-2xl
            md:text-5xl 
            lg:text-4xl">
              Beneficios de usar CitasFacil
            </h2>
            <div class="relative grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-3">
              <Benefit 
                title="Organización" 
                details='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.) ' 
                href="../image/beneficios/agendar.jpeg"
              />
              <Benefit 
                title="Excelentes Especialistas" 
                details='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.) ' 
                href="../image/beneficios/medicos.jpg"
              />
              <Benefit 
                title="Ahorro de Tiempo" 
                details='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.) ' 
                href="../image/beneficios/tiempo.jpg"
              />				
            </div>
          </div>

          <Professional/>
          <Faqs/>          
        </div>
        {/*<Footer/>*/}
    </>
  )
}
export default Home
