'use client';
import CourseList from '@/components/Course/CourseList';
import MultiFilterSearch from '@/components/filter/FilterSearch';

import React,{useState} from 'react'

export default function page() {
    // const [filters, setFilters] = useState({
    //     category: '',
    //     classType: '',
    //     frequency: '',
    //     rating: '',
    // });
    // const handleSearch = (filters) => {
    //     setFilters(filters);

    // }
    return (
        <div>
            {/* <MultiFilterSearch onSearch={handleSearch}/> */}
            {/* <FilterModal isOpen={isModalOpen} onClose={toggleModal} /> */}
            <CourseList />

        </div>
        
    )
}
