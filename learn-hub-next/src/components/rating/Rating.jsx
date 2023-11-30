import React from "react";
import { Rating, Typography } from "@material-tailwind/react";

export function RatingWithItem({handle,rated}) {
    

    return (
        <div className="flex items-center gap-2">
            <Rating onChange={(value) => handle(value)} />
            <Typography color="blue-gray" className="font-medium">
                {rated}.0 
            </Typography>
        </div>
    );
}
