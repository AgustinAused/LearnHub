
"use server";

import { cookies } from "next/headers";


export default async function GetContracts() {
    try{
        const token = cookies().get("token");
        const res = await fetch("https://localhost:4050/api/contractions/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return error;
    }
}
