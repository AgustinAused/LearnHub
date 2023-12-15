"use server";

import { cookies } from "next/headers";
export default async function GetServices(query) {
  try {
    const token = cookies().get("token"); // Convert token to string
    const response = await fetch(
      `http://localhost:4050/api/services/allServices?page=${query.pages}&limit=${query.limit}&category=${query.filters.category}&classType=${query.filters.classType}&frequency=${query.filters.frequency}&rating=${query.filters.rating}`,
      {
        cache: "no-store",
        method: "GET", // Método GET explícito
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
