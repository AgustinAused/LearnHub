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
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function CourseAccount({ course }) {
    const router = useRouter();

    const [showButtons, setShowButtons] = React.useState(false);
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
                        <Button color="light-green" className="w-28 p-3">
                            Contracts
                        </Button>
                        {/*pagina de gestion de contratos*/}
                    </Link>

                    <Link href={`commets/${course._id}`}>
                        <Button color="light-blue" className="w-28 p-3">
                            Comments
                        </Button>
                        {/*pagina de gestion de comentarios*/}
                    </Link>
                </div>
            </CardBody>
            <CardFooter className=" flex flex-col items-center lg:flex-row">
                {showButtons ? (
                    <>
                   

                    <Button
                        color="black"
                        className="m-2 h-9 w-9 p-3 "
                        onClick={() => setShowButtons(false)}>
                        <FaTimes  />
                        
                    </Button>
                    <div  className="space-y-2  flex flex-col">

                        {course.state === "Publish" ? (
                            <Button
                                color=""
                                className="w-28"
                                onClick={unpublishCourse}>
                                Unpublish
                            </Button>
                        ) : (
                            <Button className="w-28" onClick={PublishCourse}>
                                Publish
                            </Button>
                        )}

                        <Link href={`/course/edit/${course._id}`}>
                            <Button className="w-28">Modify</Button>
                        </Link>

                        <Button
                            color="red"
                            className="w-28"
                            onClick={deleteCourse}>
                            Delete
                        </Button>

                    </div>
                    </>
                ) : (
                    <Button
                        className="w-28"
                        onClick={() => setShowButtons(true)}>
                        Options
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
