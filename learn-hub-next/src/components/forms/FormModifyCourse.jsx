'use client';
import React, { useState } from "react";

export default function FormModifyCourse({ curso, onGuardarCambios }) {
    const [cursoModificado, setCursoModificado] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCursoModificado({
            ...cursoModificado,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cursoModificado);
        onGuardarCambios(cursoModificado);
    };
    
    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Modificar Curso</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-600">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="name"
            value={curso.name}
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
            name="description"
            value={curso.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-600">
            Duración
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={curso.duration}
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
            name="frequency"
            value={curso.frequency}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="única">Única</option>
            <option value="semanal">Semanal</option>
            <option value="quincenal">Quincenal</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-600">
            Categoría
          </label>
          <input
            type="text"
            id="categoria"
            name="category"
            value={curso.category}
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
            name="classType"
            value={curso.classType}
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
            name="price"
            value={curso.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
    );
};


