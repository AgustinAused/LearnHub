"use client";
import React from "react";
import { CarouselCustomNavigation } from '@/components/carrousel/CarouselCustomNavigation';
import FormsComments from "../forms/FormsComments";

import CustomComment from "../comment/CustomComment";

export default function ArticulCourse({ course }) {
    return (
        <div>
            <div className="flex justify-center m-10">
                <div className="flex flex-col justify-center items-center bg-white rounded-2xl space-y-4  p-4 md:flex-row md:space-x-5 md:space-y-0">
                    <section className="carrouselImagen max-w-[59rem]">
                        <CarouselCustomNavigation />
                    </section>
                    <div className="w-full h-full rounded bg-white overflow-hidden shadow-lg ">
                        <div className="px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">{course.title}</div>
                            <p className="text-gray-700 text-base">${course.price}</p>
                            <p className="text-gray-700 text-base">{course.description}</p>
                            <p className="text-gray-700 text-base">Impartido por: {course.responsable?.nombre}</p>
                            <p className="text-gray-700 text-base">{course.responsable?.experiencia}</p>
                        </div>
                        <div className="px-6 pb-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    <FormsComments />
            <div className="mt-4 p-4 bg-white rounded-lg">
    {/* Aquí irían los comentarios */}
    <h2 className="text-xl font-bold mb-4">Comentarios</h2>
    <ul className="space-y-4">
        {course.comentarios?.map((comentario) => (
            <li>
                <CustomComment com={comentario} />
            </li>
        ))}
    </ul>
</div>

        </div>
    );
}
