'use client';
import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSearchParams, useRouter } from 'next/navigation';

const PasswordRecoveryForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4050/api/users/sendResetEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json(); // Read the response data
        console.log(data);
        alert("Password reset link has been sent to your email");
        router.push('/');
      } else {
        const errorMessage = await res.text(); // Read the error message from the response
        alert(`Failed to reset password: ${errorMessage}`);
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send password reset link");
    });
  };

  return (
    <Card color="white" className='p-6 my-36' shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Account Recovery
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your email address
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input onChange={handleInputChange} size="lg" label="Email" value={email} />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Recovery
        </Button>
      </form>
    </Card>
  );
}


export default PasswordRecoveryForm;