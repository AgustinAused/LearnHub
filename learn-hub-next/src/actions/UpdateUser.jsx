
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
            // user is a object
            cache: "no-store",
            body: user,
            headers: {
                Authorization: `Bearer ${extractedToken}`
            },
        });
        const data = await response.json();
        
        return {data: data, status: response.status};
    } catch(error){
        console.error("Error:", error);
    }
}
