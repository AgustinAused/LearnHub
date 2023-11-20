"use server";

import { cookies } from "next/headers";

export default async function LogoutSession() {
    // remoeuvo el token de la sesion del usuario
    cookies().delete("token");
    const cookiesList = cookies();
    const hasCookie = cookiesList.has("token");
    // redirige al usuario a la pagina de inicio si el logout fue exitoso
    return !hasCookie;
}
