"use client";
import CourseListAccount from "@/components/Course/CourseListAccount";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

import React, { useState, useEffect } from "react";

export default function page() {
  const [user, setUser] = useState({}); // Información del usuario
  const [services, setServices] = useState([]); // Lista de servicios que ofrece el usuario

  useEffect(() => {
    // Lógica para cargar la información del usuario y sus servicios desde la base de datos o una API.
    // Ejemplo de carga de datos ficticios:
    const userData = {
      name: "Nombre del Usuario",
      email: "correo@example.com",
      // Otros datos del usuario
    };
    const userServices = [
      {
        id: 1,
        title: "Curso de Matemáticas",
        description: "Descripción del curso",
      },
      {
        id: 4,
        title: "Curso de Matemáticas",
        description: "Descripción del curso",
      },
      {
        id: 3,
        title: "Curso de Matemáticas",
        description: "Descripción del curso",
      },
      {
        id: 2,
        title: "Curso de Matemáticas",
        description: "Descripción del curso",
      },
      // Otros servicios
    ];

    setUser(userData);
    setServices(userServices);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      {/* hacemos una presentatacion de pagina aesthetic */}
      <div className="flex flex-col   bg-[#f1f1f1] p-12 m-10 rounded-2xl">
        <div className=" flex justify-between font-regular items-center rounded-lg bg-black p-4 text-base leading-5 text-white opacity-100 m-10">
          <p>
            No has completado tu perfil, por favor completa tu perfil para poder
            registrar un curso
          </p>
          <Link href="/provider/account/experience">
            <Button color="white">Completar perfil</Button>
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-10 ">
          {/* Aquí va la imagen de perfil del usuario */}
          <img
            src="https://picsum.photos/200"
            alt="Imagen de perfil"
            className="rounded-full w-1/5"
          />
          {/* informacion del usuario */}
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">{user.name}</h1>
            <h2 className="text-2xl">{user.email}</h2>
          </div>
          {/* boton de agregar nuevo servicio */}
          <div className="flex justify-center items-center">
            <Link href={"/provider/addCourse"}>
              <button
                className="bg-[#ff8a00] text-white rounded-lg px-4 py-2"
                href={"/provider/addCourse"}
              >
                Agregar Servicio
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* div del titulo de la lsita de servicios */}
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Servicios Ofrecidos </h1>
      </div>

      <div className="flex justify-end">
        {/* Lista de servicios ofrecidos por la cuenta que los da*/}
        <CourseListAccount courses={services} />
      </div>
    </div>
  );
}
