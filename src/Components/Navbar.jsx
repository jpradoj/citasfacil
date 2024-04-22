
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

//import Home from '../App';
import Directory from './Directory/Directory';
//const Directory = ()=><h1>Directory test</h1>

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Directorio Médico', href:'/directory' },
        { id: 2, text: 'Nosotros', href:'/aboutus' },
        { id: 3, text: 'Contactos', href:'/contacts' },
        { id: 4, text: 'Registrarse', href:'/checkin' },
        { id: 5, text: 'Inciar Session', href:'/login' },
    ];

    return (
        <Router>
            <div className="bg-gradient-to-r from-blue-600 to-sky-400 dark:bg-gray-900">
                <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link  className="flex items-center space-x-3 rtl:space-x-reverse " to="/">
                        <img src="/image/header/Logo.png" alt="Citas Facil Icon" class="flex w-22 h-16 ml-0 md:w-18 md:h-16 lg:w-24 lg:h-22 xl:w-105 xl:h-104 2xl:w-[10rem] 2xl:h-[8rem] cursor-pointer"/>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex '>
                        {navItems.map(item => {
                            if (item.id === 4) {
                                return (
                                    <Link
                                    key={item.id}
                                    className=' p-4 m-1 text-sm cursor-pointer duration-300 rounded-xl font-medium bg-indigo-700 hover:bg-indigo-700 hover:border-none text-white hover:text-cyan-300  hover:rounded-xl-4 lg:text-[1rem] 2xl:text-3xl 2xl:p-8'
                                    to={item.href}
                                    >
                                        {item.text}
                                    </Link>
                                );
                            } else if(item.id===5) {
                                return (
                                    <Link
                                    key={item.id}
                                    className=' p-4 m-1 text-sm cursor-pointer duration-300 rounded-xl border border-indigo-700 bg-transparent font-medium hover:bg-indigo-700 hover:border-indigo-700 text-indigo-700 hover:text-cyan-300 hover:rounded-xl-4 lg:text-[1rem] 2xl:text-3xl 2xl:p-8'
                                    to={item.href}
                                    >
                                       {item.text}
                                    </Link>
                                );
                            } else {
                                return (
                                    <Link
                                    key={item.id}
                                    className='p-4 m-1 text-sm cursor-pointer duration-300 rounded-xl font-medium bg-transparent hover:bg-indigo-700 hover:border-none text-white hover:text-cyan-300  hover:rounded-xl-4 lg:text-[1rem] 2xl:text-3xl 2xl:p-8'
                                    to={item.href}
                                    >
                                        {item.text}
                                    </Link>
                                );
                            }
                        })}
                    </ul>

                    {/* Mobile Icon */}
                    <div onClick={handleNav} className="flex md:hidden ml-auto items-center p-2 w-10 h-10 justify-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 hover:border-white  ">
                        {nav ? <AiOutlineClose size={20} className='text-white' /> : <AiOutlineMenu size={20} className='text-white'/>}
                    </div>

                    {/* Mobile Menu */}
                    <div className={ nav ? 'w-full md:block md:-auto' :'fixed ease-in-out left-[-100%]'}>                 
                        <ul className='font-medium flex flex-col p-4 mt-4 border border-cyan-500 bg-blue-500 shadow-xl rounded-lg rtl:space-x-reverse '>               
                            {navItems.map(item => (
                                <Link
                                    key={item.id}                                
                                    className='block py-2 px-3 text-sm font-medium rounded-xl  bg-blue-500 text-white hover:bg-indigo-700  hover:text-cyan-300
                                    md:bg-transparent md:hover:bg-gradient-to-r md:from-indigo-700 md:to-indigo-700 md:hover:border-none md:text-white md:hover:text-cyan-300 md:hover:text-md md:hover:rounded-xl-4 md:px-3 md:py-2
                                    lg:text-[1rem]
                                    2xl:text-4xl'
                                    to={item.href}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>    
            </div>
            {/*<Route path="/directory" Component={<Directory/>}/>*/}
        </Router>            
    );
}
export default Navbar;