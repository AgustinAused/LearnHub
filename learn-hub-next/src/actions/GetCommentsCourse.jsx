
'use server';

import { cookies } from "next/headers";

export default async function GetCommentsCourse(id) {
    console.log(id);
    try{
        
        const res = await fetch(`http://localhost:4050/api/comments/all?id=${id}`, {
            method: "GET",
            cache : "no-store",
            headers: {
                'Content-Type' : 'application/json',
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
