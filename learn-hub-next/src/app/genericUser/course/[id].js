import React from "react";
import ArticulCourse from "@/components/Course/ArticulCourse";

export default function CoursePage({ course }) {
    return (
        <div className='my-28'>
            {/* <ArticulCourse course={course}/> */}
            <ArticulCourse course={course} />
        </div>
    );
}


