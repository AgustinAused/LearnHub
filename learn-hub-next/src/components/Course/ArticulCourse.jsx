'use client';
import React from "react";
import { Card, CardContent, Typography, TextField, Button, CardFooter } from '@material-tailwind/react';
import { CarouselCustomNavigation } from '@/components/carrousel/CarouselCustomNavigation';


export default function ArticulCourse({ course }) {

    return (
        <div>
            <section className="carrouselImagen">
                <CarouselCustomNavigation />
            </section>
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{course.title}</div>
                    <p className="text-gray-700 text-base">${course.price}</p>
                    <p className="text-gray-700 text-base">{course.description}</p>
                </div>
                <div className="px-6 pb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
};
