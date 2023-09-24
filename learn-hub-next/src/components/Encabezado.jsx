import React from 'react'
import Link from 'next/link'

export default function Encabezado({titulo='Ofrece tu servicio con nosotros', subtitulo='Descubre el Poder de Aprender a Tu Manera en LearnHub'}) {
  return (
    <div class=" h-screen flex items-center justify-center">
          <div class="text-center text-black">
            <h1 class="text-6xl font-extrabold mb-6">{titulo}</h1>
            <h2 class="text-3xl font-semibold mb-8">{subtitulo}</h2>
            <Link href="/sign-up"
              
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              ¡Empieza Ahora!
            </Link>
          </div>
        </div>
  )
}
