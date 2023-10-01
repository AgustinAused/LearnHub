'use client';
import CourseList from '@/components/Course/CourseList'
import FilterModal from '@/components/modal/FilterModal';
import React,{useState} from 'react'

export default function page() {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const toggleModal = () => {
    //     setIsModalOpen(!isModalOpen);
    // };

    return (
        <div>
              
            <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Filtrar
            </button>
            {/* <FilterModal isOpen={isModalOpen} onClose={toggleModal} /> */}
            <CourseList />
        </div>
        
    )
}
