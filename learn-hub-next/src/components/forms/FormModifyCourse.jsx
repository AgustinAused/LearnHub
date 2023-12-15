'use client';
import React, { useState } from "react";

export default function FormModifyCourse({ curso, onGuardarCambios }) {
  const [cursoModificado, setCursoModificado] = useState({
    state : curso.state,
    name: curso.name,
    description: curso.description,
    duration: curso.duration,
    frequency: curso.frequency,
    category: curso.category,
    classType: curso.classType,
    price: curso.price,
    imageUrl: curso.imageUrl,
    id: curso._id,
  });
  

  const handleChange = (event) => {
    console.log("cursoModificado before update:", cursoModificado);
    console.log("Event name:", event.target.name);
    console.log("Event value:", event.target.value);
    setCursoModificado({
      ...cursoModificado,
      [event.target.name]: event.target.value,
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Tittle
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={cursoModificado.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="descripcion"
            name="description"
            value={cursoModificado.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-600">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={cursoModificado.duration}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="frecuencia" className="block text-sm font-medium text-gray-600">
            Frecuency
          </label>
          <select
            id="frecuencia"
            name="frequency"
            value={cursoModificado.frequency}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="Unique">Unique</option>
            <option value="Weekly">Weekly</option>
            <option value="Biweely">Biweely</option>
            <option value="Montly">Montly</option>
          </select>
        </div>
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-600">
            Category
          </label>
          <input
            type="text"
            id="categoria"
            name="category"
            value={cursoModificado.category}
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
            value={cursoModificado.classType}
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
            value={cursoModificado.price}
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


