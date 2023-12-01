
'use server';

import { cookies } from "next/headers";



export default async function DeleteCommentCust(commentId,serviceId) {
    const tokenN = cookies().get("token");
    // Convert token to string
    let tokenString = JSON.stringify(tokenN);
    const extractedToken = tokenString.split('"')[7];
    console.log(commentId)
    try {
        const response =  await fetch(`http://localhost:4050/api/comments/delete?commentId=${commentId}&serviceId=${serviceId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${extractedToken}`,
                "Content-Type": "application/json", // Specify the content type
            },
        });
        console.log("Full Response:", response); 
        const data = await response.json();
        console.log("Parsed JSON Data:", data);

        // return null;
        return data;
    } catch (error) {
        console.error("Error:", error);
        // You might want to handle the error here, depending on your use case
        throw error;
    }
}