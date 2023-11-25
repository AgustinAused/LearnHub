import React,{useState,useEffect} from "react";
import CardCourse from "@/components/cards/CardCourse";
import  GetServices from '@/actions/GetServicios';
import LoadMoreButton from "../Button";
// import ListCourse from "@/data/coursesData"

export default function CourseList() {
    const [listCourse, setListCourse] = useState([]);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        // Realizar la solicitud fetch en useEffect para evitar llamadas continuas
        const fetchData = async () => {
            let query = {
                pages: pages,
                limit: 8
            }
            try {
                const data = await GetServices(query);
                setListCourse([...listCourse, ...data.docs]);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, [pages]); 
    const handleLoadMore = () => {
        // Incrementar la página para cargar más cursos
        setPages(prevPage => prevPage + 1);
      };

    return (
    <div>
        <div className="m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {listCourse.map((course) => (
            <CardCourse key={course._id} course={course} />
            ))}
        </div>
        <LoadMoreButton loadMore={handleLoadMore} />
    </div>
    );
}