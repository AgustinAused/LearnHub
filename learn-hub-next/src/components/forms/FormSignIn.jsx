"use client";
import React, { useState } from "react";
import useAuth from "@/customHooks/useAuth";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";

export function FormSignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar la validación necesaria.
    console.log(formData);
  };
  const [isAuthenticated, setIsAuthenticated] = useAuth("auth", "false");

  return (
    <Card color="white" className="p-6 my-36 max-w-screen-lg sm:w-96" shadow={true}>
      <h2 className="text-2xl font-semibold mb-4">Inicio de Sesión</h2>
      <form className="mt-8 mb-2 w-80 ">
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
          />
        </div>

        <a href="/provider/account">
        <Button
          onClick={() => setIsAuthenticated("true")}
          className="mt-6"
          fullWidth
        >
        Ingresar
        </Button>
        </a>
      </form>
      <p className="mt-4 text-center text-gray-600">
        ¿No tienes una cuenta?{" "}
        <a href="/sing-up" className="font-medium text-gray-900">
          Registrase
        </a>
      </p>
      <p className="mt-4 text-center text-gray-600">
        <a href="/recuperar" className="font-medium text-gray-900">
          Recuperar contraseña
        </a>
      </p>
    </Card>
  );
}
