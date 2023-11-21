"use server";

import { cookies } from "next/headers";
export default async function GetServices(formData) {
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
    const response = await fetch("URL_DE_LA_API", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    console.log(data);
    return data;
} catch (error) {
    console.error("Error:", error);
}
}
