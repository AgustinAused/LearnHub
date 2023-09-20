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
        <Card className="mt-6 w-96">
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
            </CardBody>
            <CardFooter className="pt-0">
                <Link href= {`/pageCourse/${course.id}`}>
                    <Button>Read More</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}