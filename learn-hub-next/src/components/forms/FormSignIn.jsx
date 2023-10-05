'use client'
import React, { useState } from "react";
import useAuth from "@/customHooks/useAuth";
import { Input, Button, Checkbox,Typography } from "@material-tailwind/react";




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
    const [isAuthenticated, setIsAuthenticated] = useAuth('auth', 'false');    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" bg-white w-1/3 p-6 border rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit}>
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
                    
                    <Button onClick={()=>setIsAuthenticated()} className="mt-6" fullWidth>
                        Ingresar
                    </Button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    ¿No tienes una cuenta? <a href="/sing-up" className="font-medium text-gray-900">Registrase</a>
                </p>
                <p className="mt-4 text-center text-gray-600">
                    <a href="/recuperar" className="font-medium text-gray-900">Recuperar contraseña</a>
                </p>
            </div>
        </div>
    );
}