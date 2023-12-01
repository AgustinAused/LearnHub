import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import "tailwindcss/tailwind.css";
import PostContraction from "@/actions/PostContraction";

export default function FormsInscrip({price, serviceType, id}) {
    const [Contraction, setContraction] = useState({
        name: "",
        lastName: "",
        telephone: "",
        email: "",
        preferenceTimeforContact: "",
        message: "",
        price: price,
        serviceType: serviceType,
        // get the params from the url
        serviceId: id
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContraction({
            ...Contraction,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const data = PostContraction(Contraction);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div className="">
            <h4 className="text-xl font-bold mb-4">Inscripción</h4>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white  ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            value={Contraction.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="lastName"
                            value={Contraction.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Telephone:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            name="telephone"
                            value={Contraction.telephone}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            name="email"
                            value={Contraction.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Contact Time:
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="preferenceTimeforContact"
                            value={Contraction.preferenceTimeforContact}
                            onChange={handleChange}
                        />
                    </label>
                </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              value={Contraction.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
            </form>
        </div>
    );
}
  