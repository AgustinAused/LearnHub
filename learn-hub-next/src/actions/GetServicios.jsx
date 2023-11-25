"use server";

import { cookies } from "next/headers";
export default async function GetServices(query) {
    try {
        const token = cookies().get("token"); // Convert token to string
        const response = await fetch(`http://localhost:4050/api/services/allServices?page=${query.pages}`, {
            method: 'GET',  // Método GET explícito
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error("Error:", error);
    }
}