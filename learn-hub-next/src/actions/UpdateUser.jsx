
'use server';

import { cookies } from "next/headers";


export default async function UpdateUser(user){

    // get cookie
    const token = cookies().get("token");
        const tokn = JSON.stringify(token);
        const extractedToken = tokn.split('"')[7];
    console.log(extractedToken);
    //fetch
    try{
        const response = await fetch(`http://localhost:4050/api/users/update`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${extractedToken}`,
                "Content-Type": "application/json",
            },
            // user is a object
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log("Parsed JSON Data:", data);
        return {data: data, status: response.status};
    } catch(error){
        console.error("Error:", error);
    }
}
