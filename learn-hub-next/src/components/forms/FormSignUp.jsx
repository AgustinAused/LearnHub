import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
} from "@material-tailwind/react";
import zxcvbn from "zxcvbn";

import { useRouter } from "next/navigation";

// ...

export function FormSignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    celular: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validación de tipo de datos
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      console.log("Email inválido");
    } else if (name === "celular" && !/^\d{10}$/.test(value)) {
      console.log("Celular inválido");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar la validación necesaria.
    console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:4050/api/users/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      
      
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Error al enviar los datos del formulario");
      } else {
        console.log("Registro exitoso");
        router.push("/sign-in"); // Redirigir al usuario a la página de inicio de sesión
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    const { score } = zxcvbn(value);
    setPasswordStrength(score);
  };

  return (
    <Card
      color="white"
      className="p-6 my-36 max-w-screen-lg sm:w-96"
      shadow={true}
    >
      <h2 className="text-2xl font-semibold mb-4">Registro</h2>
      <form className="mt-8 mb-2 w-80 ">
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Nombre"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Contraseña"
            onKeyUp={handlePasswordChange}
          />
          {passwordStrength > 0 && (
            <div className="text-sm text-red-600 mt-1">
              Dificultad de la contraseña:{" "}
              {
                ["Muy débil", "Débil", "Razonable", "Fuerte", "Muy fuerte"][
                  passwordStrength - 1
                ]
              }
            </div>
          )}
          {formData.password.length > 0 && formData.password.length < 8 && (
            <div className="text-sm text-red-600 mt-1">
              La contraseña debe tener al menos 8 caracteres.
            </div>
          )}
        </div>
        <div className="mb-4">
          <Input
            type="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            label="Celular"
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="/"
                className="font-medium transition-colors hover:text-gray-900"
              >
                Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <Button
          onClick={handleSubmit}
          className="mt-6"
          fullWidth
          disabled={!isChecked}
        >
          Registrarse
        </Button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        ¿Ya tienes una cuenta?{" "}
        <a href="/sign-in" className="font-medium text-gray-900">
          Ingresar
        </a>
      </p>
    </Card>
  );
}
