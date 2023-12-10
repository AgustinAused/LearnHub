"use client";
import React, { useState, useEffect } from "react";
import { CarouselCustomNavigation } from "@/components/carrousel/CarouselCustomNavigation";
import FormsComments from "../forms/FormsComments";
import CustomComment from "../comment/CustomComment";
import FormsInscrip from "../forms/FormsInscrip";
import GetServiceById from "@/actions/GetServiceById";
import { Typography } from "@material-tailwind/react";
import GetCommentsCourse from "@/actions/GetCommentsCourse";

// import coursesData from "@/data/coursesData";

export default function ArticulCourse({ course }) {
  const [imageSrc, setImageSrc] = useState("");
  const [courseDat, setCourseDat] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseDA = await GetServiceById(course);
        const comments = await GetCommentsCourse(courseDA._id);
        setCourseDat(courseDA);
        setComments(comments);
        setLoading(false);
      
        if (courseDA.image && courseDA.image.data) {
          const base64Image = Buffer.from(courseDA.image.data.data).toString("base64");
          const imageUrl = `data:${courseDA.image.contentType};base64,${base64Image}`;
          setImageSrc(imageUrl);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchCourse();
  }, [course]);

  const responsable = courseDat.responsable;
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-center m-10">
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-3xl space-y-4  p-7 md:flex-row md:space-x-5 md:space-y-0">
          <section className="carrouselImagen max-w-[59rem]">
            <CarouselCustomNavigation imagen={imageSrc} />
          </section>
          <div className="w-full h-full rounded-3xl bg-white overflow-hidden shadow-lg ">
            <div className="px-6 py-4 ">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                    {courseDat.name}
                </Typography>
                <Typography variant="h6">
                    Descripcion
                </Typography>
                <Typography>
                    {courseDat.description}
                </Typography>
                <Typography variant="h6">
                Responsible
                </Typography>
                <Typography  >
                    {courseDat.responsable?courseDat.responsable.name:"user undefined"}
                </Typography>
                <Typography variant="h6">
                    Frecuency
                </Typography>
                <Typography>
                    {courseDat.frequency}
                </Typography>
                <Typography variant="h6">
                    Duration
                </Typography>
                <Typography>
                    {courseDat.duration}
                </Typography>
                <Typography variant="h6">
                    Category
                </Typography>
                <Typography>
                    {courseDat.category}
                </Typography>
                <Typography variant="h6">
                    Class Type
                </Typography>
                <Typography>
                    {courseDat.classType}
                </Typography>
            </div>
            <div className="px-6 py-4 ">
              <FormsInscrip price={courseDat.price} serviceType={courseDat.name} id={course} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:m-32">
        <div className="p-4 bg-white rounded-lg">
          <h2 className="text-xl font-bold mb-4">Comentarios</h2>
          <ul className="space-y-4">
            {comments && comments.length > 0 ? (
            comments.map((comentario) => (
      <li key={comentario._id}>
        <CustomComment com={comentario} />
      </li>
    ))
  ) : (
    <li>No hay comentarios aún</li>
  )}
          </ul>
        </div>
      </div>

      <div className="md:mx-32">
        <FormsComments idService={course} />
      </div>
    </div>
  );
}
