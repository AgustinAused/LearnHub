import React, { useState } from "react";
import "tailwindcss/tailwind.css";

export default function FormsInscrip() {
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [contactTime, setContactTime] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Telephone: ", telephone);
        console.log("Email: ", email);
        console.log("Contact Time: ", contactTime);
        console.log("Message: ", message);
    };

    return (
        <div className="">
            <h4 className="text-xl font-bold mb-4">Inscripción</h4>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white  ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Telephone:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            value={telephone}
                            onChange={(event) => setTelephone(event.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Contact Time:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={contactTime}
                            onChange={(event) => setContactTime(event.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Message:
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Contratar
                </button>
            </form>
        </div>
    );
}
