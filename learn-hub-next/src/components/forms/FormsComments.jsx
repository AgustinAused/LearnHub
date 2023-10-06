'use client';
import React,{useState} from "react";
import { RatingWithItem } from "../rating/Rating";


export default function FormsComments() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
        rating: 4,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar la validación necesaria.
        console.log(formData);
    }
    // Revisar (Espera)
    return(
        <div className=" mx-auto p-4 bg-white rounded-2xl m-12">
            <h2 className="text-2xl font-bold mb-4">Leave a comment</h2>
            <form className="flex ] flex-col space-y-4">
                <label className="block">
                    <span className="text-gray-700 font-semibold">Name:</span>
                    <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-gray-300 p-2" />
                </label>
                <label className="block">
                    <span className="text-gray-700 font-semibold">Email:</span>
                    <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-gray-300 p-2" />
                </label>
                <label className="block">
                    <span className="text-gray-700 font-semibold">Comment:</span>
                    <textarea placeholder="Your comment" className="w-full rounded-lg border border-gray-300 p-2"></textarea>
                </label>
                <RatingWithItem/>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}