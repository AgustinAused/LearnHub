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
    onSearch(filters);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-4 md:flex md:space-x-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:items-center">
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={filters.category}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:items-center">
          <label htmlFor="classType">Tipo de Clase:</label>
          <select
            id="classType"
            name="classType"
            value={filters.classType}
            onChange={handleInputChange}
            className="border p-2"
          >
            <option value="">Selecciona una opción</option>
            <option value="grupal">Grupal</option>
            <option value="individual">Individual</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:items-center">
          <label htmlFor="frequency">Frecuencia:</label>
          <select
            id="frequency"
            name="frequency"
            value={filters.frequency}
            onChange={handleInputChange}
            className="border p-2"
          >
            <option value="">Selecciona una opción</option>
            <option value="unica">Única</option>
            <option value="semanal">Semanal</option>
            <option value="quincenal">Quincenal</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:items-center">
          <label htmlFor="rating">Calificación:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={filters.rating}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default MultiFilterSearch;

