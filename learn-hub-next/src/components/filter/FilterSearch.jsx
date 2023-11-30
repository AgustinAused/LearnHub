'use client';
import React, { useState } from 'react';

const MultiFilterSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    category: '',
    classType: '',
    frequency: '',
    rating: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filtrar atributos no definidos
    const definedFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== '')
    );

    onSearch(definedFilters);
  }	

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6  md:flex md:space-x-4 m-5">
  <form onSubmit={handleSubmit} className="flex flex-col space-x-12 md:flex-row space-y-4 md:space-y-0">
    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="category" className="text-gray-600">Categoría:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Ejemplo: Fitness, Yoga, Cocina, etc."
      />
    </div>

    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="classType" className="text-gray-600">Tipo de Clase:</label>
      <select
        id="classType"
        name="classType"
        value={filters.classType}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">Selecciona una opción</option>
        <option value="grupal">Grupal</option>
        <option value="individual">Individual</option>
      </select>
    </div>

    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="frequency" className="text-gray-600">Frecuencia:</label>
      <select
        id="frequency"
        name="frequency"
        value={filters.frequency}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">Selecciona una opción</option>
        <option value="unica">Única</option>
        <option value="semanal">Semanal</option>
        <option value="quincenal">Quincenal</option>
        <option value="mensual">Mensual</option>
      </select>
    </div>

    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="rating" className="text-gray-600">Calificación:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        value={filters.rating}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="1-5"
      />
    </div>

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none"
    >
      Buscar
    </button>
  </form>
</div>

  );
};

export default MultiFilterSearch;

