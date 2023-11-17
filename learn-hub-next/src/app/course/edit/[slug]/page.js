'use client';
import FormModifyCourse from "@/components/forms/FormModifyCourse";
// import coursesData from "@/data/coursesData";
import { useEffect, useState } from "react";

export default function page({ params }) {
    const [course,setCourse] = useState({});
    
    useEffect(
        () => {
            fetch(`http//localhost:4050/api/service/serviceById/${params.slug}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Curso:", data);
                setCourse(data);
            })
            .catch((err) => console.error(err));
            console.log("Curso:", course);
        },[params.slug]);

    const handleGuardarCambios = (cursoModificado) => {
        // aqui se hacen los cambios/ update de los datos del curso 
        console.log("Datos modificados del curso:", cursoModificado);
        fetch('http://localhost:4050/api/service/updateService', {
        method: 'PUT',
        body: JSON.stringify(cursoModificado),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((res) => res.json())
        .then((data) => {
        console.log("Curso actualizado:", data);
        })
        .catch((err) => console.error(err));;        
    };
    return(
        <div>
            <FormModifyCourse curso={course} onGuardarCambios={handleGuardarCambios}/>
        </div>
    );
    
};
