import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function CardCourse({ course }) {
    if (!course) {
        return null; // Manejo de casos en que course sea undefined
    }
    console.log("Course object:", course);
    return (
        <Card className=" shadow p-4 max-h-68 overflow-hidden">
            <CardBody>
            
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {course.name}
                </Typography>
                <Typography variant="h6">
                    Descripcion
                </Typography>
                <Typography>
                    {course.description}
                </Typography>
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
            </CardBody>
            <CardFooter className="pt-0">
                <Link href= {`/course/${course._id}`}>
                    <Button>Leer mas</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}