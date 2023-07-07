import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const About = () => {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto bg-gradient-to-tr from-purple to-orange">
      <Header />
      <div className="mx-8 text-justify font-normal lg:w-1/2 flex flex-col lg:mx-auto h-screen mt-20">
        <h2 className="text-2xl font-bold text-center py-4">
          ¡Bienvenido/a a mi proyecto personal!
        </h2>
        <p className="text-lg py-1">
          Me llamo Santiago Teran, tengo 20 años y soy un apasionado desarrollador web full-stack de Argentina. Estoy emocionado de presentarte mi última creación: una Single Page Application (SPA) diseñada con Next.js 13.4, Tailwind, y la potente Weather API.
        </p>
        <p className="text-lg py-1">
          La aplicación cuenta con un buscador donde los usuarios pueden ingresar el nombre de la ciudad que deseen consultar. Una vez realizada la búsqueda, la aplicación mostrará diversos datos relacionados con el clima de esa ciudad en particular. Estos datos pueden incluir información como la temperatura actual, la temperatura a lo largo del día, así como también pronósticos de temperatura para los próximos días.
        </p>
        <p className="text-lg py-1">
          Gracias por visitar mi proyecto personal y por ser parte de esta emocionante experiencia.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default About