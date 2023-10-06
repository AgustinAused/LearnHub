import React from 'react'

export default function page() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold mb-4">Contáctanos</h2>
          <p className="text-xl mb-6">¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para cualquier pregunta o comentario que puedas tener.</p>

          <div className="flex items-center mb-6">
            <svg
              className="w-6 h-6 fill-current text-yellow-400 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-4.29a1 1 0 0 0 1.42-1.42L11.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L10 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42L8.59 12l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L10 13.41l2.29 2.3z" />
            </svg>
            <p>123 Calle Principal, Ciudad</p>
          </div>

          <div className="flex items-center mb-6">
            <svg
              className="w-6 h-6 fill-current text-yellow-400 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-4.29a1 1 0 0 0 1.42-1.42L11.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L10 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42L8.59 12l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L10 13.41l2.29 2.3z" />
            </svg>
            <p>contacto@tuempresa.com</p>
          </div>

          <div className="flex items-center">
            <svg
              className="w-6 h-6 fill-current text-yellow-400 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-4.29a1 1 0 0 0 1.42-1.42L11.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L10 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42L8.59 12l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L10 13.41l2.29 2.3z" />
            </svg>
            <p>+123 456 789</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="Oficina de Contacto" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}
