'use client';
import CourseList from '@/components/Course/CourseList'

import React,{useState} from 'react'

export default function page() {
    return (
        <div>
            <button onClick={{/*toggleModal*/}} className="flex g-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Filtrar
            </button>
            {/* <FilterModal isOpen={isModalOpen} onClose={toggleModal} /> */}
            <CourseList />
        </div>
        
    )
}
