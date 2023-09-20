'use client'
import React from "react";
import CardCourse from "@/components/cards/CardCourse";
import ListCourse from "@/data/coursesData"
//props 
export default function CourseList() {
    return (
        <div style={{ display: 'grid', justifyItems:'center'  , gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            { ListCourse.map((course) => (
                <CardCourse course={course} />
            ))}
        </div>
    );
}