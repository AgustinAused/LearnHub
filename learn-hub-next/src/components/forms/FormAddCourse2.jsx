'use client';
import React, { useState } from "react";

export default function AgregarCursoForm() {
    const [curso, setCurso] = useState({
        titulo: "",
        descripcion: "",
        duracion: "",
        frecuencia: "única",
        categoria: "",
        tipoClase: "individual",
        costo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurso({
            ...curso,
            [name]: value
        });
    };
    //url endpoint
    const url = 'http//localhost:4050/api/service/createService';
    //token 
    const token = localStorage.getItem("token");
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes acceder a los datos del formulario
        console.log(curso);
        // Aqui se envian aca se hace la req
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(curso),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10 m-5">
            <h2 className="text-2xl font-semibold mb-4">Agregar Curso</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-600">
                        Título
                    </label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={curso.titulo}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">
                        Descripción
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={curso.descripcion}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="duracion" className="block text-sm font-medium text-gray-600">
                            Duración
                        </label>
                        <input
                            type="text"
                            id="duracion"
                            name="duracion"
                            value={curso.duracion}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="frecuencia" className="block text-sm font-medium text-gray-600">
                            Frecuencia
                        </label>
                        <select
                            id="frecuencia"
                            name="frecuencia"
                            value={curso.frecuencia}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        >
                            <option value="única">Única</option>
                            <option value="semanal">Semanal</option>
                            <option value="quincenal">Quincenal</option>
                            <option value="mensual">Mensual</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="categoria" className="block text-sm font-medium text-gray-600">
                        Categoría
                    </label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={curso.categoria}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tipoClase" className="block text-sm font-medium text-gray-600">
                        Tipo de Clase
                    </label>
                    <select
                        id="tipoClase"
                        name="tipoClase"
                        value={curso.tipoClase}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    >
                        <option value="individual">Individual</option>
                        <option value="grupal">Grupal</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="costo" className="block text-sm font-medium text-gray-600">
                        Costo
                    </label>
                    <input
                        type="text"
                        id="costo"
                        name="costo"
                        value={curso.costo}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
                    >
                        Agregar Curso
                    </button>
                </div>
            </form>
        </div>
    );
};

