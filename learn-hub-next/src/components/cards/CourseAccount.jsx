import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function CourseAccount({course}) {
    return(
    <Card className=" max-w-[48rem] flex-row">
        <CardBody className="w-3/5">
        <Typography variant="h5" color="blue-gray" className="mb-2">
            {course.title}
        </Typography>
        <Typography>
            {course.description}
        </Typography>
        </CardBody>
        <CardFooter className="">
        <Button className=" ">Modify</Button>
        <Button className="">Delete</Button>
        </CardFooter>
    </Card>
    )
};