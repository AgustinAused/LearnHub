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
import { useRouter } from "next/navigation";

export default function CourseAccount({ course }) {
    const router = useRouter();
    const deleteCourse = async (e) => {
        e.preventDefault();
        try {
            const deleteFetch = async () => {
                const courseDA = await DeleteService(course._id);
            };
            deleteFetch();
            router.refresh();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const unpublishCourse = async (e) => {
        e.preventDefault();
        // Your code here
        try {
            const courseDA = await UnpublishService(course._id);
            console.log("service unpublish :" + courseDA);
            router.refresh();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const PublishCourse = async (e) => {
        e.preventDefault();
        // Your code here
        try {
            const courseDA = await PublishService(course._id);
            console.log("service publish :" + courseDA);
            router.refresh();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Card className="items-center flex justify-center items-center  flex-col md:flex-row md:justify-between ">
            <CardBody className="flex flex-col justify-center items-center md:items-start">
                <Typography
                    href="null"
                    variant="h5"
                    color="blue-gray"
                    className="mb-2">
                    {course.name}
                </Typography>
                <Typography>{course.description}</Typography>

                <div className="flex flex-row space-x-2 mt-2">
                    <Link href={`contraction/${course._id}`}>
                        <Button color="light-green" className="w-28">
                            Contracts
                        </Button>
                        {/*pagina de gestion de contratos*/}
                    </Link>

                    <Link href={`commets/${course._id}`}>
                        <Button color="light-blue" className="w-28">
                            Comments
                        </Button>
                        {/*pagina de gestion de comentarios*/}
                    </Link>
                </div>
            </CardBody>
            <CardFooter className="space-y-2 items-center flex flex-col">
                {course.state === "Publish" ? (
                  <Button color="" className="w-28" onClick={unpublishCourse}>
                        Unpublish
                    </Button>
                ) : (
                  <Button className="w-28" onClick={PublishCourse}>
                        Publish
                    </Button>
                )}

                <Link href={`/course/edit/${course._id}`}>
                    <Button className="w-28">Modify</Button>
                    {/*abre el formulario y modifica los campos necesarios */}
                </Link>
                {/*tinee que eliminar el conmentario */}
                <Button color="red" className="w-28" onClick={deleteCourse}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}
