"use client";
import GetUserDetails from "@/actions/GetUserDetails";
import FormModifyAccount from "@/components/forms/FormModifyAccount";
import { useEffect, useState } from "react";
// import Loading from "./loading";

export default function page(params) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userDetails = await GetUserDetails();
                console.log("User details: ", userDetails);
                setUser(userDetails);
            } catch (error) {
                console.error("Error fetching user details: ", error);
            } finally {
                // Marcar que la carga ha terminado, independientemente de si fue exitosa o no
                setLoading(false);
            }
        };
        fetchUserDetails();
        }, []);

  

    return (
    <div className="max-w-md mx-auto mt-10 p-4">
        <h1 className="text-4xl font-bold mb-6">Account Edit Page</h1>
        {/* Aquí puedes agregar el resto de tu contenido */}
        {loading ? (
                <p className="text-center">Cargando...</p>
            ) : (
                <FormModifyAccount  account={user} />
            )
            }
    </div>
    )
};
