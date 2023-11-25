import DeleteService from "@/actions/DeleteService";
import PublishService from "@/actions/PublishService";
import UnpublishService from "@/actions/UnpublishService";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function CourseAccount({ course }) {
  const deleteCourse = async (e) => {
    e.preventDefault();
    try {
        const deleteFetch = async () => {
          const courseDA = await DeleteService(course._id);
        };
        deleteFetch();
    }
    catch (error) {
      console.error("Error:", error);
    }
  };
  const unpublishCourse = async (e) => {
    e.preventDefault();
    // Your code here
    try{
      const courseDA = await UnpublishService(course._id);
      console.log('service unpublish :' + courseDA); 
      unpublishFetch();
    }catch(error){
      console.error("Error:", error);
    }
  };
  const PublishCourse = async (e) => {
    e.preventDefault();
    // Your code here
    try{
      const courseDA = await PublishService(course._id);
      console.log('service publish :' + courseDA); 
      unpublishFetch();
    }catch(error){
      console.error("Error:", error);
    }
  };


  return (
    <Card className="items-center flex justify-between flex-row w-">
      <CardBody className="">
        <Typography href="null" variant="h5" color="blue-gray" className="mb-2">
          {course.name}
        </Typography>
        <Typography>{course.description}</Typography>
      </CardBody>
      <CardFooter className="space-x-4 flex-row">
        {
          course.state === "Publish" ? (
            <Button className="" onClick={unpublishCourse}>
              Unpublish
            </Button>
          ) : (
            <Button className="" onClick={PublishCourse}>
              Publish
            </Button>
          )
        }
        
        {/*tinee que eliminar el conmentario */}
        <Link href={`commets/${course.id}`}>
          <Button className="">Commets</Button>
          {/*pagina de gestion de comentarios*/}
        </Link>
        <Link href={`/course/edit/${course.id}`}>
          <Button className="">Modify</Button>
          {/*abre el formulario y modifica los campos necesarios */}
        </Link>
        <Button className="" onClick={deleteCourse}>
          Delete
        </Button>
        {/*tinee que eliminar el conmentario */}
      </CardFooter>
    </Card>
  );
}
