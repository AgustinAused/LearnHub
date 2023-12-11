// Importa las bibliotecas necesarias
import React, { useState, useEffect } from "react";
import UpdateUser from "@/actions/UpdateUser";

// Componente del formulario
export default function FormModifyAccount({ account, onGuardarCambios }) {
  // Estados para los datos del formulario y la vista previa de la imagen
  const [formData, setFormData] = useState({
    name: account.name,
    email: account.email,
    degree: account.degree,
    experiencia: account.expirience,
    image: account.image,
  });

  const [imageSrc, setImageSrc] = useState("");

  // Estado adicional para el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState(null);

  // Efecto para actualizar la vista previa de la imagen cuando cambia la cuenta
  useEffect(() => {
    async function createUrlImg() {
      if (account && account.image) {
        const fullURL = `http://localhost:4050/usersProfileImages/${account.image}`;
        setImageSrc(fullURL);
      }
    }
    createUrlImg();
  }, [account]);

  // Manejar cambios en el archivo seleccionado
  const handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(file);
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Manejar cambios en otros campos del formulario
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("degree", formData.degree);
    formDataToSend.append("experiencia", formData.experiencia);

    if (selectedFile) {
      formDataToSend.append("image", selectedFile);
    } 

    try {
      const response = await UpdateUser(formDataToSend);

      if (response.status === 200) {
        console.log("Response:", response.data);
        alert("Cuenta modificada correctamente");
      } else {
        console.error("Error en la actualización:", response.statusText);
        console.error("Respuesta del servidor:", response.data);
        alert("Error al modificar la cuenta. Por favor, inténtelo de nuevo.");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
      alert("Error al modificar la cuenta. Por favor, inténtelo de nuevo.");
    }
  };

  // Renderizar el formulario
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10"
    >
      <div className="mx-auto w-48 text-center">
        <div className="relative w-48">
          <img
            className="w-48 h-48 rounded-full absolute"
            src={imageSrc}
            alt=""
          />
          <label htmlFor="image" className="w-48 h-48 group hover:bg-gray-200 opacity-60 rounded-full flex justify-center items-center cursor-pointer transition duration-500">
            <img
              className="hidden group-hover:block w-12"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
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
        <label htmlFor="degree" className="block text-sm font-medium text-gray-600">
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
        <label htmlFor="experience" className="block text-sm font-medium text-gray-600">
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