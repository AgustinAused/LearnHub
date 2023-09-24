"use client";
import React, { useState, useEffect } from 'react';
import ArticulCourse from '@/components/Course/ArticulCourse';



export default function page() {
    const [course, setCourse] = useState({}); // Información del usuario


    useEffect(() => {
        // Lógica para cargar la información del usuario y sus servicios desde la base de datos o una API.
        // Ejemplo de carga de datos ficticios:

        const courseData = {
            id: 1,
            title: "Curso de Desarrollo Web",
            responsable: {
                nombre: "Juan Pérez",
                experiencia: "Experto en desarrollo web con más de 10 años de experiencia."
            },
            description: "Aprende a crear sitios web modernos utilizando las últimas tecnologías web.",
            duracion: "8 semanas",
            frecuencia: "2 clases por semana",
            price: "199",
            comentarios: [
                {
                    id: 1,
                    autor: "María Rodríguez",
                    comentario: "¡Excelente curso! Aprendí mucho y los materiales son muy útiles.",
                },
                {
                    id: 2,
                    autor: "Carlos López",
                    comentario: "El profesor es muy claro en sus explicaciones. Lo recomiendo.",
                },
            ]
        };
        setCourse(courseData);
    }, []);

    return (
        <div>
            <ArticulCourse course={course}/>
        </div>
    );
}
