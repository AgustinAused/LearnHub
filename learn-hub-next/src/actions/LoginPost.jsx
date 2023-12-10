"use server";

import { cookies } from "next/headers";
export default async function loginAction(formData) {
  // Aqui vemos el form

  console.log(JSON.stringify(formData));
  // Aqui se envian aca se hace la req
 
  const options = {
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
    body: JSON.stringify(formData),
    };

    let response = await fetch('http://localhost:4050/api/users/login', options);
    const data = await response.json();
    console.log(data);
    if (data.loginUser == undefined) {
      throw Error(data.message || "Login failed");
    } else {
      cookies().set("token", data.loginUser, { secure: true });
      // cookies.set("token", data.token,{secure:true});
      // Puedes también realizar otras acciones con el token si es necesario
      console.log("Token guardado en las cookies", data.loginUser);
      return data;
      
    }
}
