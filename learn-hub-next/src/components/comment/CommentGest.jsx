import React from "react";

export default function CommentGest({ com }) {
    return (
        <div className="bg-white shadow rounded-lg p-4 my-4">
            <div className="flex items-center mb-2">
                <div className="bg-gray-300 w-12 h-12 rounded-full flex-shrink-0"></div>
                <div className="ml-2">
                    <div className="font-semibold text-lg">{com.autor}</div>
                </div>
            </div>
            <p className="text-gray-800">{com.comentario}</p>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Eliminar
                </button>
            </div>
        </div>
    );
};