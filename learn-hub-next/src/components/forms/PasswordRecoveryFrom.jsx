'use client';
import React, { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar correos electrónicos de recuperación
    // o restablecer contraseñas usando el correo electrónico proporcionado (almacenado en la variable 'email').
    // Por ahora, solo mostraremos un mensaje de éxito ficticio.
    setMessage(`Se ha enviado un correo electrónico de recuperación a ${email}`);
  };
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
        account recovery
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ingresar su correo electrónico y nombre 
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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