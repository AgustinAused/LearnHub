
'use server';

import { cookies } from "next/headers";

export default async function GetCommentsCourse(id) {
    console.log(id);
    try{
        const token = cookies().get('token');
        // Convert token to string
        let tokenString = JSON.stringify(token);
        const extractedToken = tokenString.split('"')[7];
        // console.log(token);
        const res = await fetch(`http://localhost:4050/api/comments/all?id=${id}`, {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'authorization': `Bearer ${extractedToken}`,
            }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // console.log("Full response", res);
        const data = await res.json();
        console.log("Data", data);
        return data;
    }catch(error){
        console.log(error);
        throw error;
    }
};
