import React from 'react';

const Faqs = () => {
    return (
        <>
            <div class="bg-gray-200 text-white py-18 pb-12">
                <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl text-blue-800">Preguntas Frecuentes</h2>
                <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32  divide-blue-800">
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">¿Qué servicios ofrecemos?</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>Ofrecemos una herramienta que servirá tanto a médicos como a pacientes para poder reservar cómodamente las citas médicas mediante un sistema de administración, de forma que los pacientes no tengan que esperar largos ratos y momentos incómodos y los profesionales de la salud tengan el control total sobre el manejo de citas. CitasFacil te hace mucha más comoda tu experiencia médica. Además, la app posee su sección de directorio médico para elevar el alcance los profesionales que hagan uso de la misma.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">¿Es necesario tener una cuenta para usar usar la app?</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>Si, tanto médicos como pacientes deberán poseer una cuenta en la app para poder usarla. Esto se hace con el fin de tener un mejor control y uso de la misma.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">¿Cómo puedo registrarme en el sitio?</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>Puedes registrarte haciendo clic en el botón "Registrarse" ubicado en la parte superior de la página, ó directamente haciendo clic <a class="text-xl hover:text-blue-600" href="/registro/medicos">Registrarme</a>.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">¿A quién esta dirigida la app?</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>La app esta dirigida a todos aquellos médicos, odontólogos, centros de diagnóstico y todo aquellos servicos involucrados con la salud que requieran tener una mejor organización con el manejo de las citas a sus pacientes, mejorarando la experiencia de ellos y la de los profesionales de la salud que ofrecen sus servicios. Además de ello, la app tambien servirá como guía o directorio médico para elevar el alcance y poder llegar a más pacientes.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">¿El uso de la app tiene algún costo?</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>Los profesionales de la salud podrán adquirir los servicios de administración de citas y/o publicitación a través de la guía ó directorio médico mediante una suscripción mensual, cuyos precios se muestran en la pagina de <a class="text-green-600 text-xl hover:text-blue-600" href="/registro/medicos">registro</a>. Por parte de los pacientes, el uso de la app es totalmente gratuito.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">Prueba Gratuita</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>Los profesionales de la salud que se registren en la app, disfrutarán de un mes de prueba totalmente gratuito.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2  outline-none cursor-pointer text-blue-800 text-xl">¿Cómo reservar una cita si soy un paciente?</summary>
                        <div class="px-4 pb-4 text-blue-800 text-md">
                        <p>Si ya estas registrado en la app (puedes <a class="text-xl hover:text-blue-600" href="/registro/pacientes">registrarte aquí</a>), simplemente busca el profesional de la salud con el que quiera reservar una cita, lo cual puede hacer a través del buscador o del directorio médico. Cabe destacar que existe la posibilidad que no todos los profesionales registrados en la app tengan contratado el servicio de administración de citas, por lo que en este caso deberá comunicarse directamente con el para gestionar una cita.</p>
                        </div>
                    </details>
                </div>
                </div>
            </div>
        </>
    );
};
export default Faqs;