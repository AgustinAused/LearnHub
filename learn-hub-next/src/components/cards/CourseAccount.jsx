import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";


export default function CourseAccount({ course }) {
  const deleteCourse = () =>{
    //aqui va la funcion para eliminar un curso
  };

  return (
    <Card className="items-center flex justify-between flex-row w-">
      <CardBody className="">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {course.title}
        </Typography>
        <Typography>{course.description}</Typography>
      </CardBody>
      <CardFooter className="space-x-4 flex-row">
        <Link href={`/commets/${course.id}`}>
          <Button className="">Commets</Button>{/*pagina de gestion de comentarios*/}
        </Link>
        <Link href={`/modifyCourse/${course.id}`}>
          <Button className="" >Modify</Button>{/*abre el formulario y modifica los campos necesarios */}
        </Link>
        <Button className="" onClick={deleteCourse}>Delete</Button>{/*tinee que eliminar el conmentario */}
      </CardFooter>
    </Card>
  );
}
