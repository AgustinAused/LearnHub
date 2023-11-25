'use server';

import { cookies } from "next/headers";

export default async function EditCourse(courseModify) {
    try {
        const token = cookies().get("token"); // Convert token to string
        const response = await fetch(`http://localhost:4050/api/services/updateService`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(courseModify),
        });
        console.log("Full Response:", response); // Log the full response
        const data = await response.json();
        console.log("Parsed JSON Data:", data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}