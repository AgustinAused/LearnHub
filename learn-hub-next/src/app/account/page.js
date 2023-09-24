'use client';
import CourseListAccount from '@/components/Course/CourseListAccount';

import React, { useState, useEffect } from 'react';

export default function page(params) {

    const [user, setUser] = useState({}); // Información del usuario
    const [services, setServices] = useState([]); // Lista de servicios que ofrece el usuario

    useEffect(() => {
        // Lógica para cargar la información del usuario y sus servicios desde la base de datos o una API.
        // Ejemplo de carga de datos ficticios:
        const userData = {
            name: 'Nombre del Usuario',
            email: 'correo@example.com',
            // Otros datos del usuario
        };
        const userServices = [
            { id: 1, title: 'Curso de Matemáticas', description: 'Descripción del curso' },
            { id: 4, title: 'Curso de Matemáticas', description: 'Descripción del curso' },
            { id: 3, title: 'Curso de Matemáticas', description: 'Descripción del curso' },
            { id: 2, title: 'Curso de Matemáticas', description: 'Descripción del curso' },
            // Otros servicios
        ];

        setUser(userData);
        setServices(userServices);
    }, []);

    return (
        <div>
            <h1>Perfil de {user.name}</h1>
            <p>Email: {user.email}</p>
            {/* Otros campos de información del usuario */}

            <h2>Servicios Ofrecidos</h2>

            {/* Lista de servicios ofrecidos por la cuenta que los da*/}
            <CourseListAccount courses={services}/>
            
        </div>
    );
};
