import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CardCourse({ course }) {
    const [imageSrc, setImageSrc] = useState("");



  useEffect(() => {
    const fetchCourse = async () => {
      try {
        
      
        if (course.image && course.image.data) {
          const base64Image = Buffer.from(course.image.data.data).toString("base64");
          const imageUrl = `data:${course.image.contentType};base64,${base64Image}`;
          setImageSrc(imageUrl);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }

    fetchCourse();
    }, [course]);



    if (!course) {
        return null; // Manejo de casos en que course sea undefined
    }

    return (
        <Card className=" shadow p-4 max-h-68 overflow-hidden">
            <div className="relative h-56 ">
                <img
                    className="absolute h-full w-full object-cover rounded-xl"
                    src={imageSrc}
                    alt="course"
                />
            </div>
            <CardBody>
                
                <Typography variant="h4" color="blue-gray" className="mb-3">
                    {course.name}
                </Typography>

                <Typography variant="h6">
                    Description
                </Typography>
                <Typography>
                    {course.description}
                </Typography>

                <div className="flex flex-row justify-between mt-4">

                <div>
                <Typography variant="h6">
                Responsible
                </Typography>
                <Typography  >
                    {course.responsable?course.responsable.name:"user undefined"}
                </Typography>
                <Typography variant="h6">
                    Frecuency
                </Typography>
                <Typography>
                    {course.frequency}
                </Typography>
                <Typography variant="h6">
                    Duration
                </Typography>
                <Typography>
                    {course.duration}
                </Typography>
                </div>
                <div>

                <Typography variant="h6">
                    Category
                </Typography>
                <Typography>
                    {course.category}
                </Typography>
                <Typography variant="h6">
                    Class Type
                </Typography>
                <Typography>
                    {course.classType}
                </Typography>
                </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex justify-center">
                <Link href= {`/course/${course._id}`}>
                    <Button>Leer mas</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}