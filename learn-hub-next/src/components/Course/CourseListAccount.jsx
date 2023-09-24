import CourseAccount from "../cards/CourseAccount";

export default function CourseListAccount({courses}) {
    return(
        <div className="">

            { courses.map((course) => (
                <CourseAccount course={course} />
            ))}
            
        </div>
        
    )
};
