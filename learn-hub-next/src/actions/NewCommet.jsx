
"use server";



export default async function NewComment(formData) {
    try {// Convert token to string
        const response = await fetch(`http://localhost:4050/api/comments/new`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            },
        });
        // console.log("Full Response:", response); // Log the full response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
