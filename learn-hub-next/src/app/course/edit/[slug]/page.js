'use client';
import FormModifyCourse from "@/components/forms/FormModifyCourse";

export default function page({ course }) {
    const handleGuardarCambios = (cursoModificado) => {
        // Aquí puedes manejar los datos modificados del curso, por ejemplo, enviarlos a tu backend para actualizar la información en la base de datos.
        console.log("Datos modificados del curso:", cursoModificado);
        // Puedes también actualizar el estado del curso en tu componente principal si es necesario.
        
    };
    return(
        <div>
            <FormModifyCourse curso={course} onGuardarCambios={handleGuardarCambios}/>
        </div>
    );
    
};
