'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function HorizontalCard({title,parah,image}) {
    return (
      <Card className="w-full max-w-[98rem] flex-col lg:flex-row ">
        
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 p-4 shrink-0   lg:w-2/5 lg:rounded-r-none lg:p-0"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full rounded-xl  w-full object-cover lg:rounded-r-none "
        />
      </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4  uppercase">
          Beneficio
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="mb-8 text-2xl font-normal">
            {parah}
          </Typography>
        </CardBody>
      </Card>
    );
  }