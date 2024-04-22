import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import './carousel.css';

import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        direction="horizontal"
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        className="mySwiper"
        rewind={true}
        speed={1500}
        autoplay={{
            delay:3500,
            /*pauseOnMouseEnter:true,*/
            disableOnInteraction:false
        }}
      >
        <SwiperSlide>
          <img src="/image/swiper/banner.png" />
          <div class="flex absolute w-full h-full justify-center">
            <div class="bg-transparent pt-0 md:pt-7 lg:pt-8 xl:pt-10 2xl:pt-[7rem]">
              <h1 class="text-center justify-center text-white">
                <span className='text-[0.8rem] md:text-xl lg:text-xl xl:text-2xl 2xl:text-[3rem]'>Porque <span className='text-cyan-500 md:text-[2rem] lg:text-3xl xl:text-4xl 2xl:text-[5rem] '>tu salud es prioridad</span>, agenda una cita hoy!</span>
              </h1>
            </div>
          </div>      

          <div className='hidden sm:flex absolute bg-transparent w-full h-full  text-white 
          md:mt-[13rem] md:ml-[6rem] md:text-sm
          lg:mt-[17rem] lg:ml-[8rem] lg:text-xl
          xl:mt-[22rem] xl:ml-[12rem] xl:text-2xl
          2xl:mt-[44rem] 2xl:ml-[18rem] 2xl:text-[3rem]'>
              <div className="bg-transparent w-auto h-8 mt-[1rem] ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} Tu salud <span className='text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl 
                2xl:text-[4rem]'>a un clic.</span></h1>
              </div>
              <div className="flex absolute bg-transparent w-auto h-8  
              md:mt-[2.5rem] 
              lg:mt-[4rem] 
              xl:mt-[4rem] 
              2xl:mt-[7rem] @apply ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} <span className='text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl 
                2xl:text-[4rem]'>Cita</span> médica, <span className='text-amber-400 md:text-[1.3rem] lg:text-[1.8rem] xl:text-3xl 2xl:text-[4rem]'>sin filas.</span></h1>
              </div>
              <div className="flex absolute bg-transparent w-auto h-8 
              md:mt-[4rem] 
              lg:mt-[7rem] 
              xl:mt-[7rem] 
              2xl:mt-[13rem] @apply ml-[1rem]">
                <h1 className="text-center justify-center ">{'\u2022'} Agendar es <span className=' text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl 
                2xl:text-[4rem]'>fácil.</span></h1>
              </div>
              <div className="flex absolute bg-transparent w-auto h-8 
              md:mt-[5.5rem] 
              lg:mt-[10rem] 
              xl:mt-[10rem] 
              2xl:mt-[20rem] ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} Tienes el control de tú cita.</h1>
              </div>
          </div>

          <div className='hidden sm:flex absolute bg-transparent w-full h-full text-white 
          md:mt-[13rem] md:ml-[65rem] md:text-sm
          lg:mt-[17rem] lg:ml-[88rem] lg:text-xl
          xl:mt-[22rem] xl:ml-[122rem] xl:text-2xl
          2xl:mt-[44rem] 2xl:ml-[225rem] 2xl:text-[3rem]'>
              <div className="bg-transparent w-auto h-8 mt-[1rem] ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} Agendamiento <span className='text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl
                2xl:text-[4rem]
                '>24/7</span></h1>
              </div>
              <div className="flex absolute bg-transparent w-auto h-8 
              md:mt-[2.5rem]
              lg:mt-[4rem] 
              xl:mt-[4rem] 
              2xl:mt-[7rem] ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} <span className='text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl
                2xl:text-[4rem]'>Sin salir</span> de casa.</h1>
              </div>
              <div className="flex absolute bg-transparent w-auto h-8 
              md:mt-[4rem]
              lg:mt-[7rem] 
              xl:mt-[7rem] 
              2xl:mt-[13rem] ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} Dale click a <span className='text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl
                2xl:text-[4rem]'>tu salud.</span></h1>
              </div>
              <div className="flex absolute bg-transparent w-auto h-8 
              md:mt-[5.5rem]
              lg:mt-[10rem] 
              xl:mt-[10rem] 
              2xl:mt-[20rem] ml-[1rem]">
                <h1 className="text-center justify-center">{'\u2022'} Prioriza <span className='text-amber-400 
                md:text-[1.3rem]
                lg:text-[1.8rem] 
                xl:text-3xl
                2xl:text-[4rem]'>tu bienestar.</span></h1>
              </div>
          </div>

          <div className="flex absolute w-full h-full justify-center">
            <div className="bg-transparent pt-[6.6rem] mbxl:pt-[8rem] mbxx:pt-[9.1rem] md:pt-[17rem] lg:pt-[23rem] xl:pt-[32rem] 2xl:pt-[60rem]">
              <h1 className="text-cyan-500 text-center justify-center text-[0.9rem] md:text-[2rem] lg:text-3xl xl:text-4xl 2xl:text-[5rem]">Somos CitasFacil</h1>
            </div>
          </div>
              
        </SwiperSlide>
        <SwiperSlide>
          <img  src="/image/swiper/carrusel1.jpg" />
          <div className="absolute backdrop-blur-xl bg-gray-800 bg-opacity-25 rounded-3xl">
            <div className="relative pl-5 pr-5 mt-0 mb-0">
              <span className="block font-bold text-white  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">Con  <span className="font-bold text-sky-400 md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl">CitasFacil</span></span>
              <span className="font-bold text-sky-400 md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl">Ir al médico </span>
              <span className="block font-bold text-white md:inline-block md:text-2xl xl:inline-block lg:text-3xl xl:text-4xl 2xl:text-6xl">jamás había sido tan facil</span>              
            </div>  
            <span class="relative pl-5 pr-5 font-bold  text-sky-400 md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl">!estás a un solo clic!</span>          
          </div>  
        </SwiperSlide>
        <SwiperSlide><img  src="/image/swiper/carrusel2.jpg" /></SwiperSlide>        
        <SwiperSlide><img  src="/image/swiper/carrusel3.jpg" /></SwiperSlide>   
      </Swiper>
    </>
  );
}


