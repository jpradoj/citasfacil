import React from "react"

const Footer = () => {
    return (
        <footer class=" bg-gray-900 text-white py-4 mt-0 h-[6rem] w-full">
            <div class="flex justify-center space-x-4 pt-1">
                <a href="#" class="text-white" >
                    <img class="text-white bg-white rounded-lg w-6 h-6"src="/image/footer/instagram.svg"/>
                </a>
                <a href="#" class="text-white">
                    <img class="text-white bg-white rounded-lg w-6 h-6"src="/image/footer/x.svg"/>
                </a>
                <a href="#" class="text-white">
                    <img class="text-white bg-white rounded-lg w-6 h-6"src="/image/footer/facebook.svg"/>
                </a>
                <a href="#" class="text-white">
                    <img class="text-white bg-white rounded-lg w-6 h-6"src="/image/footer/whatsapp.svg"/>
                </a>
            </div>
            <p class="text-xl text-center text-gray-400 mt-3">© Citas Facil 2024 Todos los derechos reservados</p>
        </footer>
    );
}
export default Footer;