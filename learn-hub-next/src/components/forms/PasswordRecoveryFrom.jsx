'use client';
import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    fetch(`http//localhost:4050/api/users/sendResetEmail`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Se ha enviado el enlace de restablecimiento de contraseña");
    })
    .catch((err) => {
      console.log(err)
      alert("No se ha podido enviar el enlace de restablecimiento de contraseña");
    });
  };
    return (
      <Card color="white" className='p-6 my-36' shadow={true}>
        <Typography variant="h4" color="blue-gray">
        account recovery
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ingresar su correo electrónico y nombre 
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
          </div>
          <Button className="mt-6" fullWidth>
            Recovery
          </Button>
          
        </form>
      </Card>
    );
  }

export default PasswordRecoveryForm;