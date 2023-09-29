import CommentGest from "@/components/comment/CommentGest";
import React from "react";

// recibe una lista de Comentarios 
export default function Comment({ Comments }) {
    
    return (
        <div>
            {/* aca irian los todos los comentarios de todos los cursos  */}
            <h2>Sistema de gestion de Comentario</h2>
            {Comments.map((comment) => (
                    <div key={comment.id}>
                        <CommentGest com={comment} />
                    </div>
            ))}

        </div>
    )
}