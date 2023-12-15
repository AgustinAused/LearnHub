"use server";

import { cookies } from "next/headers";

export default async function GetUserDetails() {
    try {
        const token = cookies().get("token");
        // Convert token to string
        let tokenString = JSON.stringify(token);
        const extractedToken = tokenString.split('"')[7];

        const response = await fetch(
            "http://localhost:4050/api/users/userByToken",
            {
                cache: "no-store",
                headers: {
                    Authorization: `Bearer ${extractedToken}`, // Agregar el token al encabezado Authorization
                    'Content-Type': 'application/json', // Puedes ajustar esto según las necesidades de tu API
                }
            }
        );
        const data = await response.json();
        // console.log(data)
        return data
    } catch (error) {
        console.error("Error:", error);
    }
}
