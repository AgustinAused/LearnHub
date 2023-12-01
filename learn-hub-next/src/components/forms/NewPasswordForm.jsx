'use client';
import React, { useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useSearchParams,useRouter } from 'next/navigation';


const NewPasswordForm = () => {
    const searchParams= useSearchParams()
    const router = useRouter()
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        //use searchParams
        const token = searchParams.get('token')
    
        fetch('http://localhost:4050/api/users/resetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ password }),
        })
            .then(async (res) => {
                if (res.status === 200) {
                    alert("Password has been reset successfully");
                    router.push('/login');
                } else {
                    const errorMessage = await res.text(); // Read the error message from the response
                    alert(`Failed to reset password: ${errorMessage}`);
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
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
                <Button onClick={handleSubmit} type="submit" className="mt-6" fullWidth>
                    Reset Password
                </Button>
            </form>
        </Card>
    );
}

export default NewPasswordForm;
