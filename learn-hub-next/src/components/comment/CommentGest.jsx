import React from "react";
import DeleteCommentCust from "@/actions/DeleteComment"


export default function CommentGest({ com, serviceId}) {
    const deleteComment = async (e) => {
        e.preventDefault();
        console.log(com._id);
        let commentId = com._id;
        try {
            const response = await DeleteCommentCust(commentId,serviceId)
            console.log(response);
            window.location.reload();

        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    };
    return (
        <div className="bg-white shadow rounded-lg p-4 my-4 flex justify-between items-center">
        <div className="flex-1">
            <div className="flex items-center mb-2">
                <div className="bg-gray-300 w-12 h-12 rounded-full flex-shrink-0"></div>
                <div className="ml-2">
                    <div className="font-semibold text-lg">{com.name}</div>
                </div>
            </div>
            <p className="text-gray-800">{com.content}</p>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={deleteComment}>
            Eliminar
        </button>
    </div>
    );
};