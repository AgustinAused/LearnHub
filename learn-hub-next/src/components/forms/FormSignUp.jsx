import React, { useState } from "react";
import { Input, Button, Checkbox,Typography,Card } from "@material-tailwind/react";
import Link from "next/link";



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
        
        <Card color="white" className="p-6 my-36 max-w-screen-lg sm:w-96" shadow={true}>
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
                        />
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
                    <Link href="/sign-in">
                    <Button className="mt-6" fullWidth>
                        Register
                    </Button>
                    </Link>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    ¿Ya tienes una cuenta? <a href="#" className="font-medium text-gray-900">Ingresar</a>
                </p>
            </Card>
        
    );
}
