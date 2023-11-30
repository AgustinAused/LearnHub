"use client";
import React, { useState, useEffect } from "react";
import { CarouselCustomNavigation } from "@/components/carrousel/CarouselCustomNavigation";
import FormsComments from "../forms/FormsComments";
import CustomComment from "../comment/CustomComment";
import FormsInscrip from "../forms/FormsInscrip";
import GetServiceById from "@/actions/GetServiceById";

// import coursesData from "@/data/coursesData";

export default function ArticulCourse({ course }) {
  const [courseDat, setCourseDat] = useState({});
  useEffect(() => {
    try {
      const fetchCourse = async () => {
        const courseDA = await GetServiceById(course);
        setCourseDat(courseDA);
      };
      fetchCourse();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-center m-10">
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-3xl space-y-4  p-7 md:flex-row md:space-x-5 md:space-y-0">
          <section className="carrouselImagen max-w-[59rem]">
            <CarouselCustomNavigation />
          </section>
          <div className="w-full h-full rounded-3xl bg-white overflow-hidden shadow-lg ">
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2">{courseDat.title}</div>
              <p className="text-gray-700 text-base">${courseDat.price}</p>
              <p className="text-gray-700 text-base">{courseDat.description}</p>
              <p className="text-gray-700 text-base">
                Impartido por: {courseDat.responsable?.nombre}
              </p>
              <p className="text-gray-700 text-base">
                {courseDat.responsable?.experiencia}
              </p>
            </div>
            <div className="px-6 py-4 ">
              <FormsInscrip  price={courseDat.price} serviceType={courseDat.classType} id={course}/>
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-32">
        <div className="p-4 bg-white rounded-lg">
          {/* Aquí irían los comentarios */}
          <h2 className="text-xl font-bold mb-4">Comentarios</h2>
          <ul className="space-y-4">
            {courseDat.comentarios?.map((comentario) => (
              <li>
                <CustomComment com={comentario} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:mx-32">
        <FormsComments idService={course}/>
      </div>
    </div>
  );
}
