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
                    {course.name}
                </Typography>
                <Typography>
                    {course.description}
                </Typography>
                <Typography>
                    {course.responsable.name}
                </Typography>
                <Typography>
                    {course.frequency}
                </Typography>
                <Typography>
                    {course.duration}
                </Typography>
                <Typography>
                    {course.categoria}
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