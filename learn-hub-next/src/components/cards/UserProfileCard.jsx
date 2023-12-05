'use client'
import React from 'react'
import { useState, useEffect } from "react";
import GetUserDetails from "@/actions/GetUserDetails";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function UserProfileCard() {
    const [user, setUser] = useState({}); // Información del usuario
    
    const [imageSrc, setImageSrc] = useState("");
  
  
    useEffect(() => {
      // Lógica para cargar la información del usuario y sus servicios desde la base de datos o una API.
      // Ejemplo de carga de datos ficticios:
      
      async function fetchData() {
        const data = await GetUserDetails();
        console.log(data)
        if(data.image && data.image.data){
            // Convierte el Buffer a una cadena Base64
            const base64Image = Buffer.from(data.image.data.data).toString("base64");
            // Construye la URL de la imagen
            const imageUrl = `data:${data.image.contentType};base64,${base64Image}`;
            // Actualiza el estado con la URL de la imagen
            setImageSrc(imageUrl);
        }
        setUser(data);
    }
    fetchData();
}, []);

return (
    <div className="flex flex-col justify-center">
        {/* hacemos una presentatacion de pagina aesthetic */}
        <div className="flex flex-col bg-[#f1f1f1] p-12 m-10 rounded-2xl">
            {!user.expirience?<div className="flex justify-between font-regular items-center rounded-lg bg-black p-4 text-base leading-5 text-white opacity-100 m-10">
                <p>
                    No has completado tu perfil, por favor completa tu perfil para poder
                    registrar un curso
                </p>
                <Link href="/provider/account/experience">
                    <Button color="white">Completar perfil</Button>
                </Link>
            </div>:''}
            <div className="flex justify-center items-center space-x-10">
                {/* Aquí va la imagen de perfil del usuario */}
                {imageSrc && (
                    <img src={imageSrc} alt="User" className="rounded-full w-1/5" />
                )}

                {/* informacion del usuario */}
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">{user.name}</h1>
                    <h2 className="text-2xl">{user.email}</h2>
                    {user.degree? <h2 className="text-2xl">{user.degree}</h2>:''}
                    {user.expirience? <h2 className="text-2xl">{user.expirience}</h2>:''}
                </div>
                {/* boton de agregar nuevo servicio */}
                <div className="flex flex-col items-center">
    {/* Boton de agregar nuevo servicio */}
    <div className="mb-4">
        <Link href={"/provider/addCourse"}>
            <button
                className="bg-[#ff8a00] text-white rounded-lg px-4 py-2"
            >
                Agregar Servicio
            </button>
        </Link>
    </div>

    {/* Boton de modificar usuario */}
    <div className="mb-4">
        <Link href={"/provider/account/edit"}>
            <button
                className="bg-[#ff8a00] text-white rounded-lg px-4 py-2"
            >
                Modificar Usuario
            </button>
        </Link>
    </div>
</div>
            </div>
        </div>
        {/* div del titulo de la lsita de servicios */}
        <div className="flex justify-center">
            <h1 className="text-4xl font-bold">Servicios Ofrecidos </h1>
        </div>
    </div>
);
}
