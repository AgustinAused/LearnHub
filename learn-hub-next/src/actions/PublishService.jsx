
"use server";

import { cookies } from "next/headers"; 


export default async function PublishService(id) {
    try {
        const token = cookies().get("token");
        // Convert token to string
        let tokenString = JSON.stringify(token);
        const extractedToken = tokenString.split('"')[7];
        console.log(id + "y "+ token);
        const response = await fetch(`http://localhost:4050/api/services/publishService`, {
            method: "PUT",
            cache: "no-store",
            headers: {
                Authorization: `Bearer ${extractedToken}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                id: id,
            }),
        });

        const data = await response.json();
        console.log("Parsed JSON Data:", data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}