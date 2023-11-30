import React,{useState,useEffect} from "react";
import CardCourse from "@/components/cards/CardCourse";
import  GetServices from '@/actions/GetServicios';
import LoadMoreButton from "../Button";
// import ListCourse from "@/data/coursesData"

export default function CourseList() {
    const [listCourse, setListCourse] = useState([]);
    const [filters, setFilters] = useState({});
    const [pages, setPages] = useState(1);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };
    const onSearch = () => {
        console.log(filters);
        // fetchData();
    }


    useEffect(() => {
            const fetchData = async () => {
                let query = {
                    pages: pages,
                    limit: 8,
                    filters:filters,
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
        <div className="flex flex-col space-x-12 md:flex-row space-y-4 md:space-y-0">
    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="category" className="text-gray-600">Categoría:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Ejemplo: Fitness, Yoga, Cocina, etc."
      />
    </div>

    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="classType" className="text-gray-600">Tipo de Clase:</label>
      <select
        id="classType"
        name="classType"
        value={filters.classType}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">Selecciona una opción</option>
        <option value="grupal">Grupal</option>
        <option value="individual">Individual</option>
      </select>
    </div>

    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="frequency" className="text-gray-600">Frecuencia:</label>
      <select
        id="frequency"
        name="frequency"
        value={filters.frequency}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">Selecciona una opción</option>
        <option value="unica">Única</option>
        <option value="semanal">Semanal</option>
        <option value="quincenal">Quincenal</option>
        <option value="mensual">Mensual</option>
      </select>
    </div>

    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:items-center">
      <label htmlFor="rating" className="text-gray-600">Calificación:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        value={filters.rating}
        onChange={handleInputChange}
        className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="1-5"
      />
    </div>

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none"
        onClick={onSearch}
    >
      Buscar
    </button>
  </div>
        <div className="m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {listCourse.map((course) => (
            <CardCourse key={course._id} course={course}  />
            ))}
        </div>
        <LoadMoreButton loadMore={handleLoadMore} />
    </div>
    );
}