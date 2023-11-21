"use server";

import { cookies } from "next/headers";
export default async function GetServices(query) {
    try {
        const token = cookies().get("token"); // Convert token to string
        const response = await fetch("URL_DE_LA_API", {
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
