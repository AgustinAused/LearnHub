"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Card,
} from "@material-tailwind/react";

import loginAction from "@/actions/LoginPost";

import { useRouter } from "next/navigation";

export function FormSignIn() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Pepe 1");
    // Check if email and password are provided
    if (!formData.email || !formData.password) {
      setErrorMessage("Please enter a valid email and password");
      return;
    }

    try {
      console.log(formData);
      const loginOk = await loginAction(formData);
      // console.log("holka",loginOk);
      // console.log(`Pepe 2: ${loginOk.loginUser}`);
      if (loginOk.status !== 400) {
        console.log("Token guardado en localStorage:", loginOk);
        router.refresh();
        router.push("/provider/account");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  return (
    <Card color="white" className="p-6 my-36 max-w-screen-lg sm:w-96" shadow={true}>
      <h2 className="text-2xl font-semibold mb-4">Inicio de Sesión</h2>
      <form className="mt-8 mb-2 w-80">
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
        
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Show error message if exists */}

        <Button
          color="white"
          // buttonType="filled"
          size="lg"
          className="mt-6"
          fullWidth
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        ¿No tienes una cuenta?{" "}
        <a href="/sign-up" className="font-medium text-gray-900">
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
