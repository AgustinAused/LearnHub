'use server';

import { cookies } from "next/headers";


export default async function UpdateExperience(formulario) {
    const tokenN = cookies().get("token");
    // Convert token to string
    let tokenString = JSON.stringify(tokenN);
    const extractedToken = tokenString.split('"')[7];
    console.log(formulario)
    try {
        const response =  await fetch(`http://localhost:4050/api/users/update`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${extractedToken}`,
                "Content-Type": "application/json", // Specify the content type
            },
            body: JSON.stringify(formulario), // Convert the form data to a JSON string
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        // You might want to handle the error here, depending on your use case
        throw error;
    }
}
