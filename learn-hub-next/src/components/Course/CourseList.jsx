import React,{useState,useEffect} from "react";
import CardCourse from "@/components/cards/CardCourse";
import  GetServices from '@/actions/GetServicios';
// import ListCourse from "@/data/coursesData"

export default function CourseList() {
    const [listCourse, setListCourse] = useState([]);

    useEffect(() => {
        // Realizar la solicitud fetch en useEffect para evitar llamadas continuas
        const fetchData = async () => {
            try {
                const data = await GetServices();

                setListCourse(data.docs);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []); 

    return (
        <div className="m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            { listCourse.map((course) => (
                <CardCourse course={course} />
            ))}
        </div>
    );
}