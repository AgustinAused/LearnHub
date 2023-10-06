'use client';
import FormModifyCourse from "@/components/forms/FormModifyCourse";
import coursesData from "@/data/coursesData";
import { useEffect, useState } from "react";

export default function page({ params }) {
    const handleGuardarCambios = (cursoModificado) => {
        // Aquí puedes manejar los datos modificados del curso, por ejemplo, enviarlos a tu backend para actualizar la información en la base de datos.
        console.log("Datos modificados del curso:", cursoModificado);
        // Puedes también actualizar el estado del curso en tu componente principal si es necesario.
        
    };
    const [course,setCourse] = useState({});
    useEffect(
        () => {
            console.log("Curso:", params.slug);
            let courseDat = coursesData.find((item) => item.id ==  params.slug);
            console.log("Curso:", courseDat);
            setCourse(courseDat);
        },
    []);
    return(
        <div>
            <FormModifyCourse curso={course} onGuardarCambios={handleGuardarCambios}/>
        </div>
    );
    
};
