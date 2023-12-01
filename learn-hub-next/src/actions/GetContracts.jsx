
"use server";

import { cookies } from "next/headers";


export default async function GetContracts() {
    try{
        const token = cookies().get("token");
        const tokn = JSON.stringify(token);
        const extractedToken = tokn.split('"')[7];
        console.log("Token", extractedToken);

        const res = await fetch("http://localhost:4050/api/contractions/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${extractedToken}`,
            },
        });
        const data = await res.json();
        console.log("Status", res.status);
        console.log("Data", data);
        return data;
    }catch(error){
        console.log(error);
        throw error;
    }
}
