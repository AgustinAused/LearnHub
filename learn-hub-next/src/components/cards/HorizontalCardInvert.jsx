"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCardinvert({title,parah}) {
  return (
    <Card className="w-full max-w-[98rem] flex-row">
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Beneficio
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {parah}
        </Typography>
      </CardBody>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-l-none"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661770001998-e8fbbc0b0171?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
    </Card>
  );
}
