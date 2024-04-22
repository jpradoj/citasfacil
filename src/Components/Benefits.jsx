import React from 'react';

const Benefits = (props) => {
    const { title, details, href} = props;
    return (
        <>
            <div>
                <div className="flex flex-col items-center px-12 py-12">
                    <div className="relative bg-indigo-700 shadow-xl rounded-xl w-[18rem] h-[24rem]  
                    mbxl:w-[22rem] mbxl:h-[24rem]
                    mbxx:w-[24rem] mbxx:h-[26rem]
                    md:w-[42rem] md:h-[46rem]  
                    lg:w-[18rem] lg:h-[26rem]
                    2xl:w-[35rem] 2xl:h-[43rem]">
                        <div>
                            <img src={href} alt="Imagen" className="rounded-lg 
                            w-118 h-110 
                            md:w-[42rem] md:h-[20rem]  
                            lg:w-[18rem] lg:h-[12rem]
                            2xl:w-[35rem] 2xl:h-[20rem]"/>
                        </div>
                        <div>
                            <h2 className="text-gray-100 text-lg text-center mt-2 
                            md:text-5xl 
                            lg:text-[1.4rem]
                            2xl:text-[2.5rem]">{title}</h2>
                        </div>
                    
                        <div>
                            <p className="text-gray-100 text-justify pl-4 pr-4 pt-2 
                            md:text-3xl md:pt-5 md:leading-[3.5rem]
                            lg:text-[1rem] lg:pt-5 lg:leading-[1.5rem]
                            2xl:text-[2rem] 2xl:pt-5 2xl:leading-[2.5rem]">{details}</p>
                        </div>
                    </div>                
                </div>
            </div>
        </>
    );
};
export default Benefits;