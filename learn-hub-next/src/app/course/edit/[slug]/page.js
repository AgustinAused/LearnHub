'use client';
import GetServiceById from "@/actions/GetServiceById";
import FormModifyCourse from "@/components/forms/FormModifyCourse";
// import coursesData from "@/data/coursesData";
import { useEffect, useState } from "react";

export default function page({ params }) {
    const [course,setCourse] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            let id = params.slug;
            try {
                const response = await GetServiceById(id);
                setCourse(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(); // Llamar a la función asíncrona
    }, [params.slug]);

    const handleGuardarCambios = async (cursoModificado) => {
        // aqui se hacen los cambios/ update de los datos del curso 
        try{
            const response = await EditCourse(cursoModificado);
            console.log(response);
        }
        catch(error){
            console.log(error);
        }

    };
    return(
        <div>
            <FormModifyCourse curso={course} onGuardarCambios={handleGuardarCambios}/>
        </div>
    );
    
};
