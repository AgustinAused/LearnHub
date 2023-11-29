"use server";

import { cookies } from "next/headers";
export default async function loginAction(formData) {
  // Aqui vemos el form
  console.log(formData);
  // Aqui se envian aca se hace la req
  try{

    const response = await fetch("http://localhost:4050/api/users/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    
    if (data.loginUser === undefined) {
      throw new Error(data.message || "Login failed");
    } else {
      cookies().set("token", data.loginUser, { secure: true });
      // cookies.set("token", data.token,{secure:true});
      // Puedes también realizar otras acciones con el token si es necesario
      console.log("Token guardado en las cookies", data.loginUser);
      return data;
    }
  } catch (error) {
      // Manejar errores, por ejemplo, intentar renovar el token si es un error de expiración
      if (error.message === 'jwt expired') {
        console.log('Token expirado, intentando renovar...');
        // Aquí podrías implementar la lógica para renovar el token y reintentar la solicitud de inicio de sesión
        
      } else {
        console.error(error);
        throw error;
      }
  }
}
