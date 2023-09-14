'use client'
import { InputDefault } from '@/components/input/InputNormal'
import React from 'react'

export default function page() {
    return (
        <div>
            <div>
            <h1>Sign Up</h1>
            <InputDefault
                name = "name"
            />
            <InputDefault
                name = "Email"
            />
            <InputDefault
                name = "Password"
                type="password" size="lg"
            />
             </div>
        </div>
    )
}


