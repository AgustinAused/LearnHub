"use client";
import postServicios from "@/actions/PostServicios";
import React, { useState } from "react";

export default function AgregarCursoForm() {
  const [curso, setCurso] = useState({
    title: "",
    description: "",
    image: null,
    state: "Publish",
    frequency: "",
    duration: "",
    classType: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Limit the image size to a little size
    if (file && file.size > 1024 * 1024) {
      alert("Please select an image smaller than 1MB.");
      return;
    }
    setCurso({
      ...curso,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(curso);
    try {
      const data = await postServicios(curso);
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };


return (
  <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10 m-5">
    <h2 className="text-2xl font-semibold mb-4">Agregar Curso</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-600"
        >
          Imagen (tamaño pequeño)
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="titulo"
          className="block text-sm font-medium text-gray-600"
        >
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={curso.title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={curso.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-600"
          >
            Duration
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
          <label
            htmlFor="frecuency"
            className="block text-sm font-medium text-gray-600"
          >
            Frecuency
          </label>
          <select
            id="frecuency"
            name="frecuency"
            value={curso.frecuency}
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
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-600"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={curso.category}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="tipoClase"
          className="block text-sm font-medium text-gray-600"
        >
          Class Type
        </label>
        <select
          id="classType"
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
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-600"
        >
          Price
        </label>
        <input
          type="text"
          id="pricr"
          name="price"
          value={curso.price}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
        >
          Agregar Curso
        </button>
      </div>
    </form>
  </div>
);
}