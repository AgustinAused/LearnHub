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
    return (
        <Card className=" shadow p-4 max-h-68 overflow-hidden">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {course.title}
                </Typography>
                <Typography>
                    {course.description}
                </Typography>
                <Typography>
                    ${course.price}
                </Typography>
                <Typography>
                    {course.responsable.nombre}
                </Typography>
                <Typography>
                    {course.frecuencia}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link href= {`/course`}>
                {/* <Link href= {`/course/${course.id}`}> */}
                    <Button>Read More</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}