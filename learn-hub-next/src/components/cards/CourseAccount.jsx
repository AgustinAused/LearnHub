import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";


export default function CourseAccount({ course }) {
  const deleteCourse = () =>{
    //aqui va la funcion para eliminar un curso
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

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
          <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
        </Link>
        <Link href={`/modifyCourse/${course.id}`}>
          <Button className="" >Modify</Button>{/*abre el formulario y modifica los campos necesarios */}
        </Link>
        <Button className="" onClick={deleteCourse}>Delete</Button>{/*tinee que eliminar el conmentario */}
      </CardFooter>
    </Card>
  );
}
