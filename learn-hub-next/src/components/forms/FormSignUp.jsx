import React, { useState } from "react";
import { Input, Button, Checkbox,Typography } from "@material-tailwind/react";




export function FormSignUp() {
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

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" bg-white w-1/3 p-6 border rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Registro</h2>
                <form onSubmit={handleSubmit}>
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
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        Register
                    </Button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    ¿Ya tienes una cuenta? <a href="#" className="font-medium text-gray-900">Ingresar</a>
                </p>
            </div>
        </div>
    );
}
