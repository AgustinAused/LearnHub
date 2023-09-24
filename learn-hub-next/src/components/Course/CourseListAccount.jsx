import CourseAccount from "../cards/CourseAccount";

export default function CourseListAccount({courses}) {
    return(
        <div className="flex-col m-8 space-y-5 w-full my-12 ">

            { courses.map((course) => (
                <CourseAccount course={course} />
            ))}
            
        </div>
        
    )
};
