import React, { useState } from 'react';

export default function FormDataTea() {
    const [titulo, setTitulo] = useState('');
    const [experiencia, setExperiencia] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu servidor o realizar alguna otra acción con ellos
        console.log('Título:', titulo);
        console.log('Experiencia:', experiencia);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Formulario para Profesores</h1>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-600">
                        Título:
                    </label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="experiencia" className="block text-sm font-medium text-gray-600">
                        Experiencia:
                    </label>
                    <textarea
                        id="experiencia"
                        name="experiencia"
                        rows="4"
                        value={experiencia}
                        onChange={(e) => setExperiencia(e.target.value)}
                        required
                        className="mt-1 p-2 border rounded-md w-full"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Enviar
                </button>
            </form>
        </div>
    );
};


