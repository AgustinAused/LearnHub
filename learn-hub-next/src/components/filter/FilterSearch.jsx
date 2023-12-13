"use client";
// Importa los estilos de Tailwind CSS
"use client";
import React, { useState } from "react";

const MultiFilterSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    category: "",
    classType: "",
    frequency: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filtrar atributos no definidos
    const definedFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== "")
    );

    onSearch(definedFilters);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:flex md:space-x-4 ml-5 mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 max-w-sm mx-auto "
      >
        {/* Categoría */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="category" className="text-gray-600">
            Categoría:
          </label>
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

        {/* Tipo de Clase */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="classType" className="text-gray-600">
            Tipo de Clase:
          </label>
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

        {/* Frecuencia */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="frequency" className="text-gray-600">
            Frecuencia:
          </label>
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

        {/* Calificación */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="rating" className="text-gray-600">
            Calificación:
          </label>
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

        {/* Botón de búsqueda */}
        <div>

          
        <button
          type="submit"
          className="col-span-2 md:col-span-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none w-full"
        >
          Buscar
        </button>
        </div>
      </form>
    </div>
  );
};

export default MultiFilterSearch;
