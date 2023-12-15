// Async function to get the User List
"use server"
import { cookies } from "next/headers";

export default async function getServicesByUser(req) {
    try {
        const token = cookies().get("token");
        // Convert token to string
        const tokenString = JSON.stringify(token);
        const extractedToken = tokenString.split('"')[7];

        const response = await fetch(
            "http://localhost:4050/api/services/serviceUser",
            {
                cache: "no-store",
                headers: {
                    Authorization: `Bearer ${extractedToken}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}