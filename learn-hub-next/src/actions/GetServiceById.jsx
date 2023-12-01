
"use server";

import { cookies } from "next/headers";
export default async function GetServiceById(id) {
    try {
        const token = cookies().get("token"); // Convert token to string
        const response = await fetch(`http://localhost:4050/api/services/serviceById/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }); // Log the full response
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}