'use client'
import React from "react";
import CardCourse from "@/components/cards/CardCourse";
import ListCourse from "@/data/coursesData"
//props 
export default function CourseList() {
    return (
        <div className="m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            { ListCourse.map((course) => (
                <CardCourse course={course} />
            ))}
        </div>
    );
}