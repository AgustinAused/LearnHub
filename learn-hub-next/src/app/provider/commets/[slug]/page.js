'use client';
import { useEffect,useState } from "react"
import CommentGest from "@/components/comment/CommentGest";
import coursesData from "@/data/coursesData";



export default function page({ params }) {
    const [commentsArr,setCommentsArr] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
        try {
            console.log(params.slug);
            let arrcourseDat = coursesData.filter(item => item.id == params.slug);
            let courseDat = arrcourseDat[0];
            setCommentsArr(courseDat.comentarios);
            console.log(courseDat);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
    }, []);
    return (
        <div>
            {/* aca irian los todos los comentarios de todos los cursos  */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 mb-4 text-gray-800">Sistema de gestion de Comentario</h2>
            {commentsArr.map((comment) => (
                    <div key={comment.id}>
                        <CommentGest com={comment} />
                    </div>
            ))}

        </div>
    )
};
