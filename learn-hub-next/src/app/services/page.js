'use client';
import CourseList from '@/components/Course/CourseList'
import MultiFilterSearch from '@/components/filter/FilterSearch';

import React,{useState} from 'react'

export default function page() {
    const handleSearch = (filters) => {
        // Aquí implementa la lógica de filtrado según los valores de los filtros
        // Luego actualiza setSearchResults con los resultados de la búsqueda.
        // Ejemplo: const results = realizarFiltrado(filters);
        // setSearchResults(results);
        console.log('Filtros de búsqueda:', filters);
      }
    return (
        <div>
            <MultiFilterSearch onSearch={handleSearch}/>
            {/* <FilterModal isOpen={isModalOpen} onClose={toggleModal} /> */}
            <CourseList />
        </div>
        
    )
}
