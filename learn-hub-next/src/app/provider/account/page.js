"use client";
import CourseListAccount from "@/components/Course/CourseListAccount";
import UserProfileCard from "@/components/cards/UserProfileCard";
import getServicesByUser from "@/actions/services";

import React, { useState, useEffect } from "react";

export default function page() {
    const [services, setServices] = useState([]); // Lista de servicios que ofrece el usuario
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getServices = async () => {
            const servicesFromServer = await getServicesByUser();
            console.log("servicesFromServer", servicesFromServer);
            setServices(servicesFromServer);
            setLoading(false);
        };
        getServices();
    }, []);

    return (
        <div>
            <UserProfileCard />
            {/* div del titulo de la lsita de servicios */}
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold">Services Offered </h1>
            </div>
            <div className="flex justify-end">
                {/* Lista de servicios ofrecidos por la cuenta que los da*/}
                <CourseListAccount courses={services} />
            </div>
        </div>
    );
}
