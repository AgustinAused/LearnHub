"use server";

import { cookies } from "next/headers";
// import cookies from 'js-cookie';
export default async function PostServicios(formData) {
  
  console.log(formData.image);
  try {
    const tokenObject = cookies().get("token");
    console.log(formData);
    // Convert token to string
    let tokenString = JSON.stringify(tokenObject);
    const token = tokenString.split('"')[7];
    // const token = cookies.token;
    const response = await fetch(
      "http://localhost:4050/api/services/createService",
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
