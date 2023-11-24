"use server";

import { cookies } from "next/headers";
// import cookies from 'js-cookie';
export default async function PostServicios(formData) {
  const form = new FormData();
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("password", formData.password);
  form.append("celular", formData.celular);
  form.append("password_confirm", formData.password_confirm);
  form.append("terms", formData.terms);
  if (formData.image) {
    form.append("image", formData.image);
  }
try {
    const token = cookies.get("token"); // Access the "token" value directly
    const response = await fetch("http://localhost:4050/api/service/createService", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });
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
