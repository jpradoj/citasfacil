import React from 'react';

const Services = (props) => {
    const {href, title} = props;
    return (
        <>
            <div>
                <div className="flex flex-col items-center px-8 py-8">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md  shadow-gray-700/40
                xl:w-[8rem] xl:h-[8rem]
                2xl:w-[15rem] 2xl:h-[15rem]">
                    <img src={href} alt="Imagen" className="w-20 h-20  2xl:w-[10rem] 2xl:h-[10rem] xl:w-[5rem] xl:h-[5rem] rounded-full"/>
                </div>
                <h2 className="text-white text-lg text-center mt-2 2xl:text-[2rem] xl:text-[1.3rem]">{title}</h2>
                </div>
            </div>
        </>
    );
};
export default Services;