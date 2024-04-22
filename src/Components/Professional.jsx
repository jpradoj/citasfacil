import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

const Professional = (props) => {
    const { title, details, href} = props;
    return (
        <>
            <professional-panel>
                <div class="relative flex bg-blue-600">
                    <img class="relative  bg-blue-600 pl-[3rem] lg:pl-[10rem] xl:pl-[12rem] 
                    2xl:w-[120rem] 2xl:h-[90rem] 2xl:pl-[28rem]"
                    src="../image/beneficios/profesional_medico.png" alt="Imagen" />
                    <h1 class="absolute  text-white 
                    text-xl ml-[9rem] mt-[1rem] mr-[1rem]
                    mbxl:ml-[10rem] mbxl:mt-[3rem] 
                    mbxx:text-2xl mbxx:ml-[11rem] mbxx:mt-[3rem]
                    md:text-5xl md:ml-[17rem] md:mt-[6rem] md:mr-[5rem]
                    lg:text-6xl  lg:ml-[28rem] lg:mt-[7rem] lg:mr-[8rem]
                    xl:text-6xl  xl:ml-[28rem] xl:mt-[7rem] xl:mr-[10rem]
                    2xl:text-8xl 2xl:ml-[60rem] 2xl:mt-[20rem] 2xl:mr-[25rem]">
                        ¿Eres Medico o Profesional de la Salud?
                    </h1>
                    <p class="absolute  text-white 
                    text-md ml-[10rem] mt-[7rem] mr-[1rem]
                    mbxl:ml-[11rem] mbxl:mt-[9rem]
                    mbxx:text-lg mbxx:ml-[13rem] mbxx:mt-[10rem]  mbxx:mr-[2rem]
                    md:text-4xl md:ml-[20rem] md:mt-[18rem] md:mr-[4rem]
                    lg:text-4xl  lg:ml-[32rem] lg:mt-[20rem] lg:mr-[7rem]
                    xl:text-4xl  xl:ml-[34rem] xl:mt-[20rem] xl:mr-[14rem]
                    2xl:text-6xl 2xl:ml-[70rem] 2xl:mt-[40rem] 2xl:mr-[25rem]"
                    >
                        Con CitasFacil !Tienes el consultorio en tus manos!
                    </p>
                    
                    <Link className="absolute py-3 px-3 text-md font-medium rounded-[1.8rem] bg-yellow-600 text-white hover:bg-indigo-700 shadow-xl hover:border-none hover:text-cyan-300 
                    ml-[10rem] mt-[12rem]
                    mbxl:ml-[12rem] mbxl:mt-[13rem]
                    mbxx:ml-[14rem] mbxx:mt-[17rem]
                    md:ml-[23rem] md:mt-[29rem] md:text-3xl md:rounded-[1.5rem]
                    lg:ml-[34rem] lg:mt-[30rem] lg:text-4xl lg:rounded-[1.5rem]
                    xl:text-4xl xl:ml-[43rem] xl:mt-[32rem]
                    2xl:text-6xl 2xl:ml-[85rem] 2xl:mt-[60rem]" 
                    to="/checkin">
                    Registrate hoy!
                    </Link>
                </div>
            </professional-panel>
        </>
    );
};
export default Professional;