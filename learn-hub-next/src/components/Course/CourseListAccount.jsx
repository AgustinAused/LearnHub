import CourseAccount from "../cards/CourseAccount";

export default function CourseListAccount({courses}) {
    return(
        <div className="flex-col m-6 space-y-5 w-3/4 ">

            { courses.map((course) => (
                <CourseAccount course={course} />
            ))}
            
        </div>
        
    )
};
