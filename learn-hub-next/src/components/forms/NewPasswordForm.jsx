'use client';
import React, { useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

const NewPasswordForm = () => {
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4050/api/users/resetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Password has been reset successfully");
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to reset password");
            });
    };

    return (
        <Card color="white" className='p-6 my-36' shadow={true}>
            <Typography variant="h4" color="blue-gray">
                New Password
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your new password
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input onChange={handleInputChange} size="lg" label="Password" type="password" value={password} />
                </div>
                <Button type="submit" className="mt-6" fullWidth>
                    Reset Password
                </Button>
            </form>
        </Card>
    );
}

export default NewPasswordForm;
