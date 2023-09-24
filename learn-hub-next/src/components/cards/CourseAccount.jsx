import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CourseAccount({ course }) {
  return (
    <Card className="items-center flex justify-between flex-row w-">
      <CardBody className="">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {course.title}
        </Typography>
        <Typography>{course.description}</Typography>
      </CardBody>
      <CardFooter className="space-x-4 flex-row">
        <Button className="">Modify</Button>
        <Button className="">Delete</Button>
      </CardFooter>
    </Card>
  );
}
