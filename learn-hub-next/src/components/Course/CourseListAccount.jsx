import CourseAccount from "../cards/CourseAccount";

export default function CourseListAccount({courses}) {
    return(
      <div className="flex-col m-8 space-y-5 w-full my-12">
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <CourseAccount key={course._id} course={course} />
        ))
      ) : (
        <p>No hay cursos disponibles</p>
      )}
    </div>
    );
};
