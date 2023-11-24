"use server";

import { cookies } from "next/headers";
// import cookies from 'js-cookie';
export default async function PostServicios(formData) {
  const form = new FormData();
  form.append("title", formData.title);
  form.append("description", formData.description);
  form.append("state", "active");
  form.append("frecuency", formData.frecuency);
  form.append("duration", formData.duration);
  form.append("classType", formData.classType);
  form.append("category", formData.category);
  form.append("price", formData.price);

  if (formData.image) {
    form.append("image", formData.image);
  }
  try {
    const tokenObject = cookies().get("token");
    // Convert token to string
    let tokenString = JSON.stringify(tokenObject);
    const token = tokenString.split('"')[7];
    // const token = cookies.token;
    const response = await fetch(
      "http://localhost:4050/api/services/createService",
      {
        headers: {
          authorization: token
        },
        method: "POST",
        body: form,
      }
    );
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
