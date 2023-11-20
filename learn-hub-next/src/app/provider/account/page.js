"use client";
import CourseListAccount from "@/components/Course/CourseListAccount";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

import React, { useState, useEffect } from "react";

export default function page() {
  const [user, setUser] = useState({}); // Información del usuario
  const [services, setServices] = useState([]); // Lista de servicios que ofrece el usuario

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "TU_TOKEN"; // Reemplaza "TU_TOKEN" con tu token real
        const response = await fetch('URL_DE_LA_API', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUser(data.user);
        setServices(data.services);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
}
