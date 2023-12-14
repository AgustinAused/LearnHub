"use client";
import React from "react";
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
            console.log(data);
            if (data && data.image) {
                //convierte el path del servidor a una URL
                const fullURL = `http://localhost:4050/usersProfileImages/${data.image}`;

                // Actualiza el estado con la URL de la imagen
                setImageSrc(fullURL);
            }
            setUser(data);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col bg-[#f1f1f1] p-6 md:p-12 m-4 md:m-10 rounded-2xl">
                {!user.expirience ? (
                    <div className="flex flex-col md:flex-row justify-between font-regular items-center rounded-lg bg-black p-4 text-base leading-5 text-white opacity-100 md:m-10">
                        <p className="md:w-2/3">
                            You have not completed your profile yet. Please
                            complete your profile to be able to create services.
                        </p>
                        <Link href="/provider/account/experience">
                            <Button color="white">
                                Complete Profile
                            </Button>
                        </Link>
                    </div>
                ) : (
                    ""
                )}

                <div className="flex flex-col mt-4 md:flex-row justify-center items-center space-y-6 md:space-x-10">
                    <div className="rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden">
                        {imageSrc && (
                            <img
                                src={imageSrc}
                                alt="User Image"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {user.name}
                        </h2>
                        <h3 className="text-xl md:text-2xl">{user.email}</h3>
                        {user.degree && (
                            // Muestra el título del usuario si existe
                            //etiqueta
                            <div>
                            
                            <h3 className="text-lg font-bold md:text-2xl">
                                Degree
                            </h3>

                            <h4 className="text-lg md:text-2xl">
                                {user.degree}
                            </h4>
                            </div>
                        )}
                        {user.expirience && (
                            <div>
                            
                                <h3 className="text-lg font-bold md:text-2xl">
                                    Experience
                                </h3>

                                <h4 className="text-lg md:text-2xl">
                                    {user.expirience}
                                </h4>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
                        <div className="mb-2">
                            <Link href={"/provider/addCourse"}>
                                <button className="bg-[#ff8a00] text-white rounded-lg w-32 py-2">
                                    Create Service
                                </button>
                            </Link>
                        </div>

                        <div className="mb-2">
                            <Link href={"/provider/account/edit"}>
                                <button className="bg-[#ff8a00] text-white rounded-lg w-32 py-2">
                                    Modify User
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
