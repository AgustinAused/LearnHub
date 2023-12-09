
'use server';

import { cookies } from "next/headers";


export default async function UpdateUser(user){

    // get cookie
    const token = cookies().get("token");
    // Convert token to string
    let tokenString = JSON.stringify(token);
    const extractedToken = tokenString.split('"')[7];

    //fetch
    
    try{
        const response = await fetch(`http://localhost:4050/api/users/updateUser`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${extractedToken}`,
                "Content-Type": "application/json",
            },
            // user is a object
            body: user,
        });
        const data = await response.json();
        console.log("Parsed JSON Data:", data);
        return data;
    } catch(error){
        console.error("Error:", error);
    }
}
