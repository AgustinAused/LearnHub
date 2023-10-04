import React, { useState } from "react";

export default function CourseFilter ({ cursos, onFiltrar }) {
  const [filtros, setFiltros] = useState({
    categoria: "",
    calificacion: 0,
    duracion: "",
    frecuencia: ""
  });

  const handleFiltroChange = (filtro, valor) => {
    setFiltros({ ...filtros, [filtro]: valor });
  };

  const aplicarFiltros = () => {
    const cursosFiltrados = cursos.filter(curso => {
      return (
        (!filtros.categoria || curso.categoria === filtros.categoria) &&
        (!filtros.duracion || curso.duracion === filtros.duracion) &&
        (!filtros.frecuencia || curso.frecuencia === filtros.frecuencia) &&
        (curso.calificacion >= filtros.calificacion)
      );
    });

    onFiltrar(cursosFiltrados);
  };

  return (
    <div>
      <select onChange={e => handleFiltroChange("categoria", e.target.value)}>
        {/* Opciones para categoría */}
      </select>
      <select onChange={e => handleFiltroChange("duracion", e.target.value)}>
        {/* Opciones para duración */}
      </select>
      <select onChange={e => handleFiltroChange("frecuencia", e.target.value)}>
        {/* Opciones para frecuencia */}
      </select>
      <input
        type="number"
        placeholder="Calificación mínima"
        onChange={e => handleFiltroChange("calificacion", parseFloat(e.target.value))}
      />
      <button onClick={aplicarFiltros}>Filtrar</button>
    </div>
  );
};

