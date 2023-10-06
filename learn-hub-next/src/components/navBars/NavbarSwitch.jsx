"use client";
import React, { useEffect } from "react";
import NavBarNoAutenticado from "./NavMaterialT";
import NavbarAutenticado from "./NavbarAutenticado";
import useAuth from "@/customHooks/useAuth";

export default function NavbarSwitch() {
  const [isAuthenticated, setIsAuthenticated] = useAuth("auth", "");

  useEffect(() => {
    const item = localStorage.getItem("auth");
    console.log(item);
    if (item == "true") {
      setIsAuthenticated(item);
    } 
  }, []);

  return (
    <div>
      {/* para utilizar dos tipos de navbar dependiendo de si esta o no autenticado */}
      {isAuthenticated == true ? (
        <NavbarAutenticado />
      ) : (
        <NavBarNoAutenticado />
      )}
      ;
    </div>
  );
}
