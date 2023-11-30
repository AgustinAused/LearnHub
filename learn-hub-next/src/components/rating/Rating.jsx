import React from "react";
import { Rating, Typography } from "@material-tailwind/react";

export default function RatingWithItem({ onChange, rated, }) {
    const handleRatingChange = (value) => {
        onChange(value);
        console.log(value);

    };

    return (
        <div className="flex items-center gap-2">
            <Rating onChange={handleRatingChange} />
            <Typography color="blue-gray" className="font-medium">
                {rated}.0
            </Typography>
        </div>
    );
}
