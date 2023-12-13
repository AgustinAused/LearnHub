'use client';
import GetServiceById from "@/actions/GetServiceById";
import FormModifyCourse from "@/components/forms/FormModifyCourse";
// import coursesData from "@/data/coursesData";
import { useEffect, useState } from "react";
import EdittCourse from '@/actions/EdittCourse';
import { useRouter } from "next/navigation";

export default function page({ params }) {
    const [course,setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        const fetchData = async () => {
            let id = params.slug;
            try {
                const response = await GetServiceById(id);
                // const data = await response.json();
                // Set the data in state
                setCourse(response);
                setLoading(false); // Set loading to false once data is available
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };
        fetchData(); // Llamar a la función asíncrona
    }, [params.slug]);

    const handleGuardarCambios = async (cursoModificado) => {
        // aqui se hacen los cambios/ update de los datos del curso 
        try{
            const response = await EdittCourse(cursoModificado);
            console.log(response);
            alert("Course data has been successfully updated!");
            router.push("/provider/account");
        }
        catch(error){
            console.log(error);
        }

    };
    if (loading) {
        return <p>Loading...</p>;
    }
    return(
        <div>
            
                <FormModifyCourse curso={course} onGuardarCambios={handleGuardarCambios}/>
                // {/* Rest of your form */}
        </div>
    );
    
};
