import React,{useEffect} from "react";
import CardCourse from "@/components/cards/CardCourse";
// import ListCourse from "@/data/coursesData"

export default function CourseList() {
    const [listCourse, setListCourse] = useState([]);

    useEffect(() => {
        // Realizar la solicitud fetch en useEffect para evitar llamadas continuas
        fetch('http://localhost:4050/api/service/allServices', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Recuperamos el array de cursos
            const courses = data.cursos;
            // Actualizamos el estado con el array de cursos
            setListCourse(courses);
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        });
    },[]); 

    return (
        <div className="m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            { listCourse.map((course) => (
                <CardCourse course={course} />
            ))}
        </div>
    );
}