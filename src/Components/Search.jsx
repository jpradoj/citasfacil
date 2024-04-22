import React from 'react';

const Search = () => {
    return (
        <>
            <div className="flex
                relative container flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg shadow-md  shadow-gray-700/40
                mt-3 ml-2 w-[19rem] 
                mbxl:w-[22.4rem]
                mbxx:w-[25.5rem]
                md:mx-auto md:pl-0 md:pr-1  md:flex-row md:w-[45rem] md:h-[5rem]
                lg:mx-auto lg:pl-0 lg:pr-1  lg:flex-row lg:w-[50rem] lg:h-[5rem]
                xl:mx-auto xl:pl-0 xl:pr-1  xl:flex-row xl:w-[60rem] xl:h-[5rem]
                2xl:mx-auto 2xl:pl-0 2xl:pr-1  2xl:flex-row 2xl:w-[100rem] 2xl:h-[8rem]
                " >
                    <input type="text" placeholder="Nombre" className="border text-center text-lg border-gray-300 rounded-lshadow-md shadow-cyan-700/40
                    mt-5 px-[1rem] py-[0.7rem]
                    mbxl:px-[3rem] mbxl:py-[0.7rem]
                    mbxx:px-[4.5rem] mbxx:py-[0.7rem]
                    md:px-[0.4rem] md:py-2 md:mt-0 md:text-left md:text-sm md:mr-[0.2rem]
                    lg:px-[0.9rem] lg:py-2 lg:mt-0 lg:text-left lg:text-sm lg:mr-[0.3rem]
                    xl:px-[2.2rem] xl:py-2 xl:mt-0 xl:text-left xl:text-md xl:mr-[0.3rem] 
                    2xl:px-[1.4rem] 2xl:py-5 2xl:mt-0 2xl:text-left 2xl:text-3xl 2xl:mr-[0.6rem]" />
                    <input type="text" placeholder="Especialidad" className="border text-center text-lg border-gray-300 rounded-lshadow-md shadow-cyan-700/40 
                    mt-5 px-[1rem] py-[0.7rem]
                    mbxl:px-[3rem] mbxl:py-[0.7rem]
                    mbxx:px-[4.5rem] mbxx:py-[0.7rem]
                    md:px-[0.4rem] md:py-2 md:mt-0 md:text-left md:text-sm md:mr-[0.2rem]
                    lg:px-[0.9rem] lg:py-2 lg:mt-0 lg:text-left lg:text-sm lg:mr-[0.3rem]
                    xl:px-[2.2rem] xl:py-2 xl:mt-0 xl:text-left xl:text-md xl:mr-[0.3rem]
                    2xl:px-[1.4rem] 2xl:py-5 2xl:mt-0 2xl:text-left 2xl:text-3xl 2xl:mr-[0.6rem]" />
                    <input type="text" placeholder="Ciudad" className="border text-center text-lg border-gray-300 rounded-lshadow-md shadow-cyan-700/40 mt-5 px-[1rem] py-[0.7rem]
                    mbxl:px-[3rem] mbxl:py-[0.7rem]
                    mbxx:px-[4.5rem] mbxx:py-[0.7rem]
                    md:px-[0.4rem] md:py-2 md:mt-0 md:text-left md:text-sm md:mr-[0.2rem]
                    lg:px-[0.9rem] lg:py-2 lg:mt-0 lg:text-left lg:text-sm lg:mr-[0.3rem]
                    xl:px-[2.2rem] xl:py-2 xl:mt-0 xl:text-left xl:text-md xl:mr-[0.3rem]
                    2xl:px-[1.4rem] 2xl:py-5 2xl:mt-0 2xl:text-left 2xl:text-3xl 2xl:mr-[0.5rem]" />
                    <button class="bg-indigo-700 text-white mt-5 px-[4rem] py-4 ml-3 mb-5 rounded text-2xl hover:text-cyan-400 hover:bg-indigo-800 shadow-md  shadow-gray-700/40
                    md:px-4 md:py-[0.3rem] md:ml-[0.2rem] md:mt-0 md:mb-0 md:text-left md:text-[1rem] 
                    lg:px-5 lg:py-[0.2rem] lg:ml-[0.2rem] lg:mt-0 lg:mb-0 lg:text-left lg:text-[1rem]  
                    xl:px-7 xl:py-[0.2rem] xl:ml-[0.2rem] xl:mt-0 xl:mb-0 xl:text-left xl:text-[1.2rem]  
                    2xl:px-7 2xl:py-[1.5rem] 2xl:ml-[0.5rem] 2xl:mt-0 2xl:mb-0 2xl:text-left 2xl:text-[2.5rem]  ">Buscar</button>
            </div>
        </>
    );
};
export default Search;