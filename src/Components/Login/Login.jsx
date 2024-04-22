import React from 'react';
import Navbar from '../Navbar'
import '../../App.css'

const Login = () => {
    return (
        <>
            <Navbar/>
            <h1 className='flex text-4xl text-black items-center justify-center mt-6 '>
                Iniciar Session
            </h1>
        </>
    );
};
export default Login;