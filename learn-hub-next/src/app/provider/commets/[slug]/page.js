'use client';
import { useEffect,useState } from "react"
import CommentGest from "@/components/comment/CommentGest";
import GetCommetsAll from "@/actions/GetCommetsAll";
// import coursesData from "@/data/coursesData";




export default function page({ params }) {
    const [commentsArr,setCommentsArr] = useState([]);
    const [course,setCourse] = useState('');
    useEffect( () => {
        const fetchData = async () => {
            try {
                const res = await GetCommetsAll(params.slug);
                console.log(res);
                // const data = await res.json();
                // Actualiza el estado con los datos recibidos
                setCourse(res.title);
                setCommentsArr(res.comments);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    fetchData()
    }, [params.slug]);
    return (
        <div>
            {/* aca irian los todos los comentarios de todos los cursos  */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 mb-4 text-gray-800">Sistema de gestion de Comentario</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-8 mb-4 text-gray-800">Curso: {course}</h3>
            {commentsArr.length > 0 ? (
    commentsArr.map((comment) => (
        <div key={comment._id}>
            <CommentGest com={comment}  serviceId={params.slug}/>
        </div>
    ))
) : (
    <p>No hay comentarios disponibles.</p>
)}

        </div>
    )
};
