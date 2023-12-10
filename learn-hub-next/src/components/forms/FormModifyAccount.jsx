"use client";
import React, { useState } from "react";
export default function FormModifyAccount({ account, onGuardarCambios }) {
  const [formData, setFormData] = useState({
    name: account.name,
    email: account.email,
    degree: account.degree,
    experiencia: account.expirience,
    // image : account.image,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes realizar alguna acción con los datos, como enviarlos a la API o realizar otra lógica.
    onGuardarCambios(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10"
    >
      <div className="form-group">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Nombre
        </label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          className="mt-1 p-2 w-full border rounded-md form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="degree"
          className="block text-sm font-medium text-gray-600"
        >
          Grado académico
        </label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md form-control"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-600"
        >
          Experiencia
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md form-control"
          id="experiencia"
          name="experiencia"
          rows="3"
          value={formData.experiencia}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div class="mx-auto w-64 text-center ">
        <div class="relative w-64">
          <img
            class="w-64 h-64 rounded-full absolute"
            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div class="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <img
              class="hidden group-hover:block w-12"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue btn btn-primary"
        >
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}
