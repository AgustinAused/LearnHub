"use client";
import React from "react";
import NavBarNoAutenticado from "./NavMaterialT";
import NavbarAutenticado from "./NavbarAutenticado";
import useAuth from "@/customHooks/useAuth";

export default function NavbarSwitch() {
  const [isAuthenticated, setIsAuthenticated] = useAuth("auth", "false");
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
